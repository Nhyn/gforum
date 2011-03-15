#!/usr/bin/env python
#

##############################################################################
# General settings
##############################################################################

GFORUM_DEBUG = True
# path to the forum
# should be the same as in gforum.yaml URL handlers
GFORUM_FORUM_PATH   = '/forum'

#
#
GFORUM_SITE_ADDRESS = 'http://localhost:9091'

# threads per page default value
GFORUM_THREADS_PER_PAGE  = 20

# messages per page default value
GFORUM_MESSAGES_PER_PAGE = 20

# gforum theme name
GFORUM_THEME = 'default'

##############################################################################
# Session settings
##############################################################################

# secret key which is used in generation of session key
# can be changed to whatever string you want
GFORUM_SESSION_SECRET_KEY = '1LI4WrSWRKhOyvgxlW3zoKAkVfewgsJJ'

# sessions expire interval in minutes
GFORUM_SESSION_EXPIRE_INTERVAL = 30

# name of the cookie where session key is stored
GFORUM_SESSION_COOKIE_NAME = 'gforum_session'