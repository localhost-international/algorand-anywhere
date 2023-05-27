#!/bin/bash

cat << "EOF"
------------------------------------------
    __        __     
 .:--.'.   .:--.'.   
/ |   \ | / |   \ |  
`" __ | | `" __ | |  
 .'.''| |  .'.''| |  
/ /   | |_/ /   | |_ 
\ \._,\ '/\ \._,\ '/ 
 `--'  `"  `--'  `"  
Algorand Anywhere API OpenAPI Codegen
------------------------------------------
Usage:
- ./script.sh generate-algod-api
- ./script.sh generate-indexer-api
------------------------------------------
EOF

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
  echo "✌️"
else
  if [ "$1" = "generate-algod-api" ]
  then
    generate_api "./src/algod" "api:codegen:algod"
  elif [ "$1" = "generate-indexer-api" ]
  then
    generate_api "./src/indexer" "api:codegen:indexer"
  else
    echo "Unknown flag: $1"
  fi
fi
