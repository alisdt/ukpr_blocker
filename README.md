# UKPR post blocker

For use with Mozilla Firefox. Directions for use:

1. Install Greasemonkey (Menu -> Add-ons -> Get Add-ons and search for Greasemonkey)

2. When prompted to, say "Yes" to restart Firefox.

3. Click on this link to install the script: https://raw.githubusercontent.com/alisdt/ukpr_blocker/master/UKPR_hider.user.js

4. Now edit the block list in the script. Click on the arrow next to the Greasemonkey icon on your toolbar and choose "Manage User Scripts". Click on "Preferences" and "Edit this User Script".

5. Edit the line

var ignore_list = 'person1,person2,firstname surname,person4';

to indicate the list of usernames to be blocked. Names are all in lower case and separated by commas, include spaces if they are in the username.