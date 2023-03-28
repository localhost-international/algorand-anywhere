printf "Are you sure you want to overwrite the api folder with a new Swagger Codegen artifact? (y/n)"
read answer

if [ "$answer" != "${answer#[Yy]}" ]; then 
	echo "Yes! Destructive action"
	# set -o allexport
	# source .env set
	# +o allexport
	# dotenv cross-var \"swagger-codegen generate -i %ALGO_NODE_TESTNET%/swagger.json -a 'x-api-key: %ALGO_NODE_API_KEY%' -l typescript-axios -o ./packages/api --additional-properties npmName=api,npmVersion=0.1.0\"

else 
	echo "Cancel, smart move..."
fi
