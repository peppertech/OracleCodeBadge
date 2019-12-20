# OracleCodeBadge
Oracle JET based emulator for Oracle Code Badge project

This project is written using Oracle JET.  To build and run locally, perform the following tasks

* Install the JET CLI:  npm -g install @oracle/ojet-cli
* Clone the repos and change to the root of the project folder
* run the ojet cli command: ojet restore
* run the ojet cli command; ojet serve


Running ojet build --release will generate the /dist folder which can then be used with a docker image.

If the JET version is updated from the current v7.1.0 release, the after_build hooks script will need to be updated as well to point to the proper directory locations.
