import FormatTag from "../../../../scripts/formatTag";

export default async function getDefaultHtml(image_src) {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
    * {
        margin: 0;
        padding: 0;
    }
    </style>
    <title>Codinasion</title>
</head>
<body>
    <img src="${image_src}" alt="Codinasion default og" />
</body>
</html>  
    `;

  return html;
}
