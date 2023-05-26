#!/bin/bash

echo "------------------------------------------"
echo '                     
    __        __     
 .:--.'.   .:--.'.   
/ |   \ | / |   \ |  
`" __ | | `" __ | |  
 .'.''| |  .'.''| |  
/ /   | |_/ /   | |_ 
\ \._,\ '/\ \._,\ '/ 
 `--'  `"  `--'  `"  
'
echo "Algorand Anywhere API OpenAPI Codegen"
echo "------------------------------------------"
echo "Usage:"
echo "- ./script.sh generate-algod-api"
echo "- ./script.sh generate-indexer-api"
echo "------------------------------------------"

overwrite_folder () {
  read -p "$1 exists. Overwrite? (y/n) " -n 1 -r
  echo
  if [[ $REPLY =~ ^[Yy]$ ]]
  then
    rm -r $1
    npm run $2
  else
    echo "Cancelled"
  fi
}

generate_api () {
  if [ -d $1 ]
  then
    overwrite_folder $1 $2
  else
    npm run $2
  fi
}

if [ -z "$1" ]
then
  echo "No flag provided."
elif [ "$1" = "generate-algod-api" ]
then
  generate_api "./packages/algod" "api:codegen:algod"
elif [ "$1" = "generate-indexer-api" ]
then
  generate_api "./packages/indexer" "api:codegen:indexer"
else
  echo "Unknown flag: $1"
fi
