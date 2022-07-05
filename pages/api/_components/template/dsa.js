import FormatTag from '../../../../scripts/formatTag';

export default async function getDsaHtml(data) {
  const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />

    <style>
      body {
        background: "white";
        background-image: radial-gradient(
            circle at 25px 25px,
            lightgray 1%,
            transparent 0%
          ),
          radial-gradient(circle at 75px 75px, lightgray 1%, transparent 0%);
        background-size: 100px 100px;
        height: 100vh;
      }
    </style>

    <title>${data.slug}</title>
  </head>
  <body class="p-5">
    <div class="row">
      <div class="col-md-9">
        <div class="row">
          <div class="col-md-12">
            <div class="pt-5 mt-1 pl-4">
              <h1>
                <b>${data.title}</b>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="text-center">
          <img
            src="https://avatars.githubusercontent.com/u/98682602?s=150&v=4"
            class="rounded text-center"
            alt="image"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="pt-4 pl-4 text-muted">
          <h6>
            Last Updated :
            <b
              >${new Date(data.latestUpdateDate)
                .toLocaleDateString('en-GB', {
                  month: '2-digit',
                  day: '2-digit',
                  year: 'numeric',
                })
                .split('/')
                .join('-')}</b
            >
          </h6>
        </div>
      </div>
    </div>
    <div class="row pt-5 pl-4 ml-1">
      <div>
        <h6>
          <b>Contributors</b>
        </h6>
      </div>
    </div>
    <div class="row pl-4 ml-1">
      ${
        data.contributors !== null &&
        data.contributors.map((username, index) => (
          <div key={index} class='p-1'>
            <img
              src={`http://github.com/${username}.png`}
              class='rounded-circle text-center'
              alt={username}
              style='width: 40px'
            />
          </div>
        )).join("")
      }
    </div>
    <div class="row pt-4 pl-4 ml-1">
      <div>
        <h6>
          <b>Languages</b>
        </h6>
      </div>
    </div>
    <div class="row">
      <div class="col-9">
        <div class="row pl-4 ml-1">
        ${
          data.tags !== null &&
          data.tags.map((tag, index) => (
            <div key={index} class='p-1'>
              <img
                src={`https://raw.githubusercontent.com/codinasion/codinasion/master/image/language/${
                  FormatTag(tag).tag
                }.png`}
                class='rounded-circle text-center'
                alt='image'
                style='width: 40px; max-height: 40px'
              />
            </div>
          )).join("")
        }
          
        </div>
      </div>
      <div class="col-3 pt-4 text-center">
        <div class="text-muted">
          <h6><b>github.com/codinasion</b></h6>
        </div>
      </div>
    </div>
  </body>
</html>  
    `;

  return html;
}
