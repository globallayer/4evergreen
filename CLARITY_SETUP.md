# Microsoft Clarity Setup Guide

## Files Requiring Clarity ID Replacement

The following **8 HTML files** contain the placeholder `YOUR_CLARITY_ID` that needs to be replaced with your actual Microsoft Clarity project ID:

| # | File | Location |
|---|------|----------|
| 1 | `index.html` | Line ~52 |
| 2 | `about.html` | Line ~46 |
| 3 | `projects.html` | Line ~46 |
| 4 | `contact.html` | Line ~46 |
| 5 | `privacy.html` | Line ~28 |
| 6 | `terms.html` | Line ~28 |
| 7 | `404.html` | Line ~27 |
| 8 | `projects/template.html` | Line ~52 |

## How to Get Your Clarity ID

1. Go to [https://clarity.microsoft.com](https://clarity.microsoft.com)
2. Sign in with your Microsoft account
3. Click **+ Add new project**
4. Enter your website name (e.g., "4EverGreen")
5. Enter your website URL: `https://4evergreen.co.uk`
6. Click **Add project**
7. Copy the **Project ID** (a string like `abc123xyz`)

## How to Replace the ID

### Option 1: Manual Replacement

Search and replace `YOUR_CLARITY_ID` with your actual ID in each file listed above.

### Option 2: Command Line (PowerShell)

```powershell
# Replace YOUR_ACTUAL_ID with your Clarity project ID
$clarityId = "YOUR_ACTUAL_ID"

# Navigate to the EverGreen directory
cd D:\Users\Administrator\Claude\EverGreen

# Replace in all HTML files
Get-ChildItem -Recurse -Filter "*.html" | ForEach-Object {
    (Get-Content $_.FullName) -replace 'YOUR_CLARITY_ID', $clarityId | Set-Content $_.FullName
}
```

### Option 3: Command Line (Bash/Git Bash)

```bash
# Replace YOUR_ACTUAL_ID with your Clarity project ID
CLARITY_ID="YOUR_ACTUAL_ID"

# Navigate to the EverGreen directory
cd /d/Users/Administrator/Claude/EverGreen

# Replace in all HTML files
find . -name "*.html" -exec sed -i "s/YOUR_CLARITY_ID/$CLARITY_ID/g" {} \;
```

## Verification

After replacement, the Clarity script should look like this:

```javascript
<script type="text/javascript">
  (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "abc123xyz");  // <-- Your actual ID here
</script>
```

## Testing

1. Deploy the updated files
2. Visit your website
3. Go to your Clarity dashboard
4. Wait 2-3 hours for initial data to appear
5. Check that heatmaps and session recordings are being captured
