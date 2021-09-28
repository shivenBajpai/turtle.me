## Turtle.me
http://www.turtle.me (Currently not hosted) is supposed to be a personal site for the author of this repository.
This codebase holds the WIP code for the website:)

<details>
  <summary>Future Plans:</summary>
  
  ## STAGE I:

  Light AND Dark mode, choice saved in cookies

  <b>Page Routes- </b>

  / => redirects to /blog

  /blog => Blog feed
  /blog/:postid: => Specifc post

  /admin => Admin page, login required, creds stored in env vars
  /admin/createPost => For posting a post

  /newsletter => newsletter signups (optouts will be in newsletters themselves)

  /tutles => Easter egg?
  Simple 404 page


  <b>API Routes- /techtutle will be the root API route </b>

  /newsletter/signup(String: Email) => Add email to newsletter mailing list
  /newsletter/signout(String: Email) => Remove email from newsletter mailing list

  /blog() => List of IDs of Recent posts.
  /post(Array of IDs) => Full post information.

  /admin/createPost(Object: Data) => Self Explanatory
  /admin/verify(String: Password) => admin login


  ## STAGE II:

  Ads in sidebar?

  <b>Page Routes-</b>

  / => Bootiful Landing Page (change)
  /sheetmusic => Sheet music catalogue
  /sheetmusic/:sheetid: => Particular sheet music
  /admin/addSheet => For Uploading Sheet

  <b>API routes</b>

  /sheetmusiclist() => List of IDs of Sheet Music.
  /sheetmusic(Array of IDs) => Sheet Music data 
    
    ```javascript
    console.log("I'm a code block!");
    ```
    
</details>