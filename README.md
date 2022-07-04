<h2 align="center">Codinasion OG</h2>

<div align="center">

Dynamic OG image generator for Codinasion

[![License](https://img.shields.io/github/license/codinasion/codinasion-og)](https://github.com/codinasion/codinasion-og/blob/master/LICENSE.md) [![Github Repo Size](https://img.shields.io/github/repo-size/codinasion/codinasion-og)](https://github.com/codinasion/codinasion-og) [![Github Contributors](https://img.shields.io/github/contributors/codinasion/codinasion-og)](https://github.com/codinasion/codinasion-og/graphs/contributors) [![Github Last Commit](https://img.shields.io/github/last-commit/codinasion/codinasion-og)](https://github.com/codinasion/codinasion-og/graphs/commit-activity)

</div>

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/codinasion/master/image/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>

### 📝 Table of Contents

- [🧐 About <a name = "about"></a>](#-about-)
- [🏁 Getting Started <a name = "getting_started"></a>](#-getting-started-)
- [✨ Generate OG <a name = "generate_og"></a>](#-generate-og-)
- [🚀 Deployment <a name = "deployment"></a>](#-deployment-)
- [⛏️ Built Using <a name = "built_using"></a>](#️-built-using-)
- [🔗 Reference](#-reference)

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/codinasion/master/image/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>

## 🧐 About <a name = "about"></a>

A NEXT JS app to generate OG images for Codinasion website.

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/codinasion/master/image/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>

## 🏁 Getting Started <a name = "getting_started"></a>

- Clone project
  ```
  git clone https://github.com/codinasion/codinasion-og
  ```
  ```
  cd codinasion-og/
  ```
- Install packages
  ```
  yarn
  ```
- Setup Environment Variables

  - Rename `.env.example` to `.env`
  <!-- - https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token -->
  - Replace `GITHUB_TOKEN=your_personal_access_token` with your personal access token

- Start development server
  ```
  yarn start
  ```
- Open browser and navigate to http://localhost:3000/

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/codinasion/master/image/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>

## ✨ Generate OG <a name = "generate_og"></a>

- [Basic Structure](https://codinasion-og.vercel.app/api?url=codinasion_site_url)

  ```md
  https://codinasion-og.vercel.app/api?url=codinasion_site_url
  ```

- [Default OG](https://codinasion-og.vercel.app/api?url=anything)

  ```md
  https://codinasion-og.vercel.app/api?url=anything
  ```

  ![default og](./sample_images/default-og.png)

- [Homepage OG](https://codinasion-og.vercel.app/api?url=https://codinasion.vercel.app)

  ```md
  https://codinasion-og.vercel.app/api
  ```

  ```md
  https://codinasion-og.vercel.app/api?url=https://codinasion.vercel.app
  ```

  ![homepage og](./sample_images/homepage-og.png)

- [Programme Homepage OG](https://codinasion-og.vercel.app/api?url=https://codinasion.vercel.app/programme)

  ```md
  https://codinasion-og.vercel.app/api?url=https://codinasion.vercel.app/programme
  ```

  ![programme homepage og](./sample_images/programme-homepage-og.png)

- [Programme OG](https://codinasion-og.vercel.app/api?url=https://codinasion.vercel.app/programme/add-two-numbers)

  ```md
  https://codinasion-og.vercel.app/api?url=https://codinasion.vercel.app/programme/add-two-numbers
  ```

  ![programme og](./sample_images/programme-og.png)

- [DSA Homepage OG](https://codinasion-og.vercel.app/api?url=https://codinasion.vercel.app/dsa)

  ```md
  https://codinasion-og.vercel.app/api?url=https://codinasion.vercel.app/dsa
  ```

  ![dsa homepage og](./sample_images/dsa-homepage-og.png)

- [DSA OG](https://codinasion-og.vercel.app/api?url=https://codinasion.vercel.app/dsa/linear-search)

  ```md
  https://codinasion-og.vercel.app/api?url=https://codinasion.vercel.app/dsa/linear-search
  ```

  ![dsa og](./sample_images/dsa-og.png)

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/codinasion/master/image/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>

## 🚀 Deployment <a name = "deployment"></a>

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcodinasion%2Fcodinasion-og)

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/codinasion/master/image/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>

## ⛏️ Built Using <a name = "built_using"></a>

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Github API](https://developer.github.com/v4/)
- [Chrome AWS Lambda](https://aws.amazon.com/lambda/)
- [Puppeteer](https://puppeteer.dev/)

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/codinasion/master/image/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>

## 🔗 Reference

- [Github Blog](https://github.blog/2021-06-22-framework-building-open-graph-images/)
- [Vercel OG Image](https://github.com/vercel/og-image)

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/codinasion/master/image/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>

<br>

<table>
  <tr>
    <td>
      <img align="left" src="https://raw.githubusercontent.com/codinasion/codinasion/master/image/sylvie/sylvie-small.png" width="190">
      <h3>Thanks for contributing :purple_heart:</h3>
      <ul>
        <li>Thanks for all your contributions and efforts</li>
        <li>We thank you being part of our :sparkles: commUnity :sparkles: !</li>
      </ul>
      <img width="900" height="0">
    </td>
  </tr>
</table>

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/codinasion/master/image/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>
