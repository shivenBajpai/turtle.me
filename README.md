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

  /admin/createpost => For posting a post

  /newsletter => newsletter signups (optouts will be in newsletters themselves)

  /tutles => Easter egg maybe

  Simple 404 page

  <b>API Routes- /techtutle will be the root API route </b>

  /newsletter/signup(String: Email) => Add email to newsletter mailing list

  /newsletter/signout(String: Email) => Remove email from newsletter mailing list

  /blog => List 5 Recent posts.

  /blog/:id => Full post information.

  /latest => id of the latest blog post

  /admin/createPost(Object: Data) => Self Explanatory


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


  ## STAGE III

  Auth, User comments etc, unplanned.
    
</details>

<details> 
  <summary>.env file format</summary>
  When running this code, a ".env" file is needed in the root directory, alternatively these variables can be defined in the environment variables

  ```env
  PORT=<Port>
  ADMIN_PASS=<Password to be used by admin for creating posts, etc.>
  DATABASE_URL="<link to Postgresql database using postgresql:// protocol, refer to prisma docs>"
  ```


</details>