<h1 align="center">Codinasion OG</h1>

<div align="center">

Dynamic OG image generator for Codinasion

[![License](https://img.shields.io/github/license/codinasion/codinasion-og)](https://github.com/codinasion/codinasion-og/blob/master/LICENSE.md) [![Github Repo Size](https://img.shields.io/github/repo-size/codinasion/codinasion-og)](https://github.com/codinasion/codinasion-og) [![Github Contributors](https://img.shields.io/github/contributors/codinasion/codinasion-og)](https://github.com/codinasion/codinasion-og/graphs/contributors) [![Github Last Commit](https://img.shields.io/github/last-commit/codinasion/codinasion-og)](https://github.com/codinasion/codinasion-og/graphs/commit-activity)

</div>

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/codinasion/master/image/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>

## 🧐 About

A NEXT JS app to generate OG images for Codinasion website.

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/codinasion/master/image/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>

## 🏁 Getting Started

- Clone project

  ```bash
  git clone https://github.com/codinasion/codinasion-og
  ```

  ```bash
  cd codinasion-og/
  ```

- Install packages

  ```bash
  yarn
  ```

- Setup Environment Variables

  - Rename **_.env.example_** to **_.env_**
  <!-- - https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token -->
  - Replace **_GITHUB_TOKEN=your_personal_access_token_** with your personal access token

- Start development server

  ```bash
  yarn start
  ```

- Open browser and navigate to http://localhost:3000/

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/codinasion/master/image/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>

## ✨ Generate OG

- Basic Structure

  ```md
  https://codinasion-og.vercel.app/api?url=codinasion_site_url
  ```

- Default OG

  ```md
  https://codinasion-og.vercel.app/api?url=anything
  ```

  ![default og](https://raw.githubusercontent.com/codinasion/codinasion-og/master/sample_images/default-og.png)

- Homepage OG

  ```md
  https://codinasion-og.vercel.app/api
  ```

  ```md
  https://codinasion-og.vercel.app/api?url=https://codinasion.vercel.app
  ```

  ![homepage og](https://raw.githubusercontent.com/codinasion/codinasion-og/master/sample_images/homepage-og.png)

- Programme Homepage OG

  ```md
  https://codinasion-og.vercel.app/api?url=https://codinasion.vercel.app/programme
  ```

  ![programme homepage og](https://raw.githubusercontent.com/codinasion/codinasion-og/master/sample_images/programme-homepage-og.png)

- Programme OG

  ```md
  https://codinasion-og.vercel.app/api?url=https://codinasion.vercel.app/programme/add-two-numbers
  ```

  ![programme og](https://raw.githubusercontent.com/codinasion/codinasion-og/master/sample_images/programme-og.png)

- DSA Homepage OG

  ```md
  https://codinasion-og.vercel.app/api?url=https://codinasion.vercel.app/dsa
  ```

  ![dsa homepage og](https://raw.githubusercontent.com/codinasion/codinasion-og/master/sample_images/dsa-homepage-og.png)

- DSA OG

  ```md
  https://codinasion-og.vercel.app/api?url=https://codinasion.vercel.app/dsa/linear-search
  ```

  ![dsa og](https://raw.githubusercontent.com/codinasion/codinasion-og/master/sample_images/dsa-og.png)

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/codinasion/master/image/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>

## ⛏️ Built Using

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Github API](https://developer.github.com/v4/)
- [Chrome AWS Lambda](https://aws.amazon.com/lambda/)
- [Puppeteer](https://puppeteer.dev/)

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/codinasion/master/image/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>

<br>
