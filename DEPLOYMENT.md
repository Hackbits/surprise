# Deployment Guide

Follow these steps to push your project to GitHub and deploy it on Vercel.

## 1. Push to GitHub

1.  Go to [GitHub](https://github.com/new) and create a new repository named `surprise`.
    - Initialize it **without** a README, .gitignore, or license.
2.  Run the following commands in your terminal:

```bash
git remote add origin https://github.com/YOUR_USERNAME/surprise.git
git push -u origin master
```

_(Replace `YOUR_USERNAME` with your actual GitHub username)_

## 2. Deploy to Vercel

1.  Go to [Vercel](https://vercel.com/new).
2.  Select your GitHub account.
3.  Connect to the `surprise` repository you just created.
4.  Click **Import**.
5.  On the "Configure Project" screen, you can leave everything as default.
6.  Click **Deploy**.

Wait for the deployment to finish, and you'll get a live link (e.g., `surprise-xi.vercel.app`) to share with her!
