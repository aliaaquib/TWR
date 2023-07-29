Follow these simple steps to add your article in [TWR](https://theweeklyroundup.vercel.app)

To do this, you need a GitHub account. If you do not have one yet, you can create one for free with an email address and password.

1. Log in to your GitHub Account

2. Vist the [TWR ~ The Weekly Roundup](https://github.com/TWR-THE-WEEKLY-ROUNDUP)

3. If you wish to be kept up to date with the repo, hit that "Star" at the top right

4. Click on FORK

5. Accept the default fork creating a copy of the TWR project in your account - this will take you to the forked repo

6. Open the folked folder in your favourite code editor

7.   Go to `public/assets/images` & Uplod your Article Cover Image & Author Image

8. Go to the file path `src/config/data.json` & add your article information.

9. For the file contents use the json structure below 👇

```
{
      id: 'Enter the next number',
      title: 'Enter the title of your article',
      category: 'Enter the category of your title',
      subCategory: ['Enter three subCategory related to your article'],
      description: " Enter the short description ",
      authorName:' Enter the Author Name of the article ',
      authorAvatar: '/assets/images/<author-image> ',
      createdAt: ' Enter the Craeted date ',
      cover: ' /assets/images/<cover-image>',
      redirectionUrl:" Paste the url where your article is published",
    }
```
10. Save the changes and raise [PR](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) & wait for merged. 

11. **Congratulation 🎉** you made your First contribution in [TWR](https://theweeklyroundup.vercel.app)

12. You will receive a GitHub notification when you have a comment, review, or your Pull Request has been merged

13. Once merged, your article will be available a few minutes later on [TWR Website](https://theweeklyroundup.vercel.app)
