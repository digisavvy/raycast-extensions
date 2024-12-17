import { ActionPanel, Action, Detail, Clipboard, closeMainWindow } from "@raycast/api";
import { exec } from "child_process";
import { useEffect } from "react";

async function processClipboard(withCommas: boolean) {
  try {
    const clipboardText = await Clipboard.readText();
    if (!clipboardText) {
      await Clipboard.copy("No text found in clipboard");
      return;
    }

    const emailRegex = /[\w.+-]+@[\w-]+\.[\w.-]+/g;
    const emails = clipboardText.match(emailRegex);

    if (!emails || emails.length === 0) {
      await Clipboard.copy("No email addresses found");
      return;
    }

    const separator = withCommas ? ", " : " ";
    const emailString = emails.join(separator);
    await Clipboard.copy(emailString);
  } catch (error) {
    console.error(error);
    await Clipboard.copy("Error processing clipboard");
  }
}

export default function Command() {
  useEffect(() => {
    processClipboard(true);
  }, []);

  const pasteEmails = async () => {
    await closeMainWindow();
    exec('osascript -e \'tell application "System Events" to keystroke "v" using command down\'');
  };

  const actions = (
    <ActionPanel>
      <Action title="Paste Emails" onAction={pasteEmails} />
      <Action
        title="Copy Without Commas"
        shortcut={{ modifiers: ["cmd"], key: "return" }}
        onAction={() => processClipboard(false)}
      />
    </ActionPanel>
  );

  return (
    <Detail
      markdown="✅ Emails extracted to clipboard with commas. Use ⌘↩ for space-separated format."
      actions={actions}
    />
  );
}
