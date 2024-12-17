# Extract Emails from Clipboard Extension for Raycast

A Raycast extension that extracts email addresses from your clipboard content and formats them with either commas or spaces.

## Features

- Automatically extracts email addresses from clipboard text
- Formats emails with comma separators by default
- Option to format with spaces using ⌘↩
- Quick paste functionality to insert emails directly into active application

## Usage

1. Copy text containing email addresses
2. Run the "Extract Emails from Clipboard" command
3. Emails will be automatically extracted and copied with commas
4. Use ⌘↩ to switch to space-separated format
5. Use "Paste Emails" action to directly paste into your active application

## Example

Input clipboard text:
```
Contact us at support@example.com or sales@example.com
For technical issues: tech@example.com
```

Output (default):
```
support@example.com, sales@example.com, tech@example.com
```

Output (space-separated):
```
support@example.com sales@example.com tech@example.com