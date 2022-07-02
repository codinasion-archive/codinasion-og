// Dynamic OG Generator

// get screenshot function
import getScreenshot from "./_components/chromium";

// templates
import getDefaultHtml from "./_components/template/default";
import getHomeHtml from "./_components/template/home";
import getProgrammeHtml from "./_components/template/programme";
import getDsaHtml from "./_components/template/dsa";

// api handler
export default async function handler(req, res) {
  const { url } = req.query;

  const default_url = `${process.env.NEXT_PUBLIC_SITE_URL}`;
  const default_og = `${process.env.NEXT_PUBLIC_DEFAULT_OG}`;

  var process_url = url || default_url;

  process_url = await process_url.replace(
    `${process.env.NEXT_PUBLIC_SITE_URL}`,
    ""
  );

  if (process_url === "" || process_url === "/") {
    // home page

    // get contributors data
    const contributors = await fetch(
      `https://raw.githubusercontent.com/${"codinasion"}/${"codinasion-data"}/master/data/contributors.json`,
      {
        method: "GET",
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
      }
    ).then((res) => res.json());

    // get tags data
    const tags = await fetch(
      `https://raw.githubusercontent.com/${"codinasion"}/${"codinasion-data"}/master/data/programme/tagList.json`,
      {
        method: "GET",
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
      }
    ).then((res) => res.json());

    const data = {
      contributors: contributors,
      tags: tags,
    };

    // generate html
    const html = await getHomeHtml(data);

    // get screenshot
    const screenshot_data = {
      html: html,
    };
    const file = await getScreenshot(screenshot_data);

    res.status(200);
    res.setHeader("Content-Type", `image/png`);
    res.setHeader(
      "Cache-Control",
      `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
    );
    res.send(file);
    return res;
  } else {
    if (
      process_url.startsWith("/programme") ||
      process_url.startsWith("programme")
    ) {
      // programme related pages
      process_url = await process_url.replace("/programme", "");
      if (process_url === "" || process_url === "/") {
        // programme list page
        const default_programme_og = `https://raw.githubusercontent.com/${"codinasion"}/${"codinasion"}/master/image/og/codinasion-og.png`;

        // generate html
        const html = await getDefaultHtml(default_programme_og);

        // get screenshot
        const screenshot_data = {
          html: html,
          width: 1280,
          height: 640,
        };
        const file = await getScreenshot(screenshot_data);

        res.status(200);
        res.setHeader("Content-Type", `image/png`);
        res.setHeader(
          "Cache-Control",
          `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
        );
        res.send(file);
        return res;
      } else {
        // programme page

        // programme slug
        const slug = await process_url.replace(/\//g, "");

        try {
          // get programme data
          const data = await fetch(
            `https://raw.githubusercontent.com/${"codinasion"}/${"codinasion-data"}/${"v4"}/data/programme/programme/${slug}.json`,
            {
              method: "GET",
              headers: {
                Authorization: `token ${process.env.GITHUB_TOKEN}`,
              },
            }
          ).then((res) => res.json());

          // generate html
          const html = await getProgrammeHtml(data);

          // get screenshot
          const screenshot_data = {
            html: html,
          };
          const file = await getScreenshot(screenshot_data);

          res.status(200);
          res.setHeader("Content-Type", `image/png`);
          res.setHeader(
            "Cache-Control",
            `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
          );
          res.send(file);
          return res;
        } catch (error) {
          await console.warn(
            `Doesn't seems like a valid programme page => ${url}`
          );
        }
      }
    } else {
      if (process_url.startsWith("/dsa") || process_url.startsWith("dsa")) {
        // dsa related pages

        process_url = await process_url.replace("/dsa", "");

        if (process_url === "" || process_url === "/") {
          // dsa list page
          const default_dsa_og = `https://raw.githubusercontent.com/${"codinasion"}/${"codinasion"}/master/image/og/codinasion-dsa.png`;

          // generate html
          const html = await getDefaultHtml(default_dsa_og);

          // get screenshot
          const screenshot_data = {
            html: html,
            width: 1280,
            height: 640,
          };
          const file = await getScreenshot(screenshot_data);

          res.status(200);
          res.setHeader("Content-Type", `image/png`);
          res.setHeader(
            "Cache-Control",
            `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
          );
          res.send(file);
          return res;
        } else {
          // dsa page

          // dsa slug
          const slug = await process_url.replace(/\//g, "");

          try {
            // get dsa data
            const data = await fetch(
              `https://raw.githubusercontent.com/${"codinasion"}/${"codinasion-data"}/${"v4"}/data/dsa/programme/${slug}.json`,
              {
                method: "GET",
                headers: {
                  Authorization: `token ${process.env.GITHUB_TOKEN}`,
                },
              }
            ).then((res) => res.json());

            // generate html
            const html = await getDsaHtml(data);

            // get screenshot
            const screenshot_data = {
              html: html,
            };
            const file = await getScreenshot(screenshot_data);

            res.status(200);
            res.setHeader("Content-Type", `image/png`);
            res.setHeader(
              "Cache-Control",
              `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
            );
            res.send(file);
            return res;
          } catch (error) {
            await console.warn(`Doesn't seems like a valid DSA page => ${url}`);
          }
        }
      }
    }
  }

  // default og image
  // generate html
  const html = await getDefaultHtml(default_og);

  // get screenshot
  const screenshot_data = {
    html: html,
    width: 1280,
    height: 640,
  };
  const file = await getScreenshot(screenshot_data);

  res.status(200);
  res.setHeader("Content-Type", `image/png`);
  res.setHeader(
    "Cache-Control",
    `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
  );
  res.send(file);
  return res;
}
