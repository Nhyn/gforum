Forum Engine for Google App Engine (Python environment).

I could not find good forum (messageboard) engine for Google App Engine, Python environment. So I decided to create my own forum engine and contribute it in open-source. I am planning to use it in some of my GAE projects.

Demo: http://gforum-demo.appspot.com

Design guidelines:
  * No user registration at all. Use only third-party platforms like: Google Accounts, Facebook, Twitter, MyOpenID, VKontakte, Mail.Ru. This is done via single sign-on platform [Loginza](http://loginza.ru)
  * SEO-friendly links to forums and threads - forum and thread permalinks include forum  title and thread title respectively
  * Design via themes - clean and simple. It should not be overloaded with unnecessary details
  * Use of Gravatars
  * Can paste images or make links to outside images (at Flickr, for example)
  * i18n
  * Social engagement features (buzz, Facebook like, Tweet buttons etc...)
  * Automatic sitemap generation
  * Private messages for users
  * RSS/ATOM feeds for threads/forums
  * Reasonable administrator interface: create/edit forums, see list of users, ban/unban users and more