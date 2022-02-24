#! /bin/bash
#
# Author:Austin Bowler 
#

# For Stage 1
# Use this function to print out the help message for -h
# or if the user does not provide a valid argument.
#
function print_usage () {
	echo "print_usage"
    echo "Usage: myuseradd.sh -a <login> <passwd> <shell> - add a user account"
    echo "myuseradd.sh -d <login>  - remove a user account"
    echo "myuseradd.sh -h          - display this usage message"
}



# For Stage 2:
# Use this function to delete users as described in the
# assignment instructions.
# 
# Arguments : userToDelete
#
function delete_user () {
	echo "delete_user"
	user=$(getent passwd "$1")
	if [ -z "$user" ]; then echo "User does not exist."
	return
	fi
	deluser --remove-home "$1"

}



# For Stage 3:
# Use this function to add users as described in the
# assignment instructions
#
# Arguments : userToAdd, userPassword, shell
# 
function add_user () {
	echo "add_user"
	user=$(getent passwd "$1")
	if [ -n "$user" ]; then echo "User already exists."
	return
	fi
	adduser "$1" -p "$2" -s "$3"
}



# For Stage1:
# Use this function to parse the command line arguments
# provided to this script to determine which function
# to call.  Example, if -h is used, print_usage
#
function parse_command_options () {

    case "$1" in

        "-h")
            print_usage
            ;;

        "-d")
            delete_user $2
            ;;

        "-a")
            add_user $2 $3 $4
            ;;

        *)
            echo "ERROR: Invalid option: $1"
            print_usage
            ;;
    esac
	
}


#
# This will run and call the parse_command_options function
# and pass all of the arguments to that function
#
parse_command_options $1 $2 $3 $4

