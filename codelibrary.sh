#!/bin/bash
helpFunction()
{
   echo ""
   echo "Usage: $0 -n \"Name Of The Problem\" -l \"language1,language2\""
   echo "language options: [kotlin, java, ruby, c"]
   exit 1 # Exit script after printing help
}


generateHtml(){
	fame=$(echo ${name//" "/""} | tr '[:upper:]' '[:lower:]')

	for (( i = 0; i < ${#langarr[@]}; i++ )); do
		if [[ ${langarr[i]} == "kotlin" || ${langarr[i]} == "java" ||  ${langarr[i]} == "ruby" || ${langarr[i]} == "c" ]]; then
			suffix=""

			if [[ ${langarr[i]} == "kotlin" ]]; then
				suffix="kt"
			elif [[ ${langarr[i]} == "java" ]]; then
				suffix="jv"
			elif [[ ${langarr[i]} == "ruby" ]]; then
				suffix="rb"
			else
				suffix="c"
			fi

			touch "codelibrary/"$fame$suffix".html"
			lang=${langarr[i]}
			lang="$(tr '[:lower:]' '[:upper:]' <<< ${lang:0:1})${lang:1}"
			printf "<!DOCTYPE html>\n<html lang='en'>\n<head>\n\t<meta charset='UTF-8'>\n\t<meta http-equiv='X-UA-Compatible' content='IE=edge'>\n\t<meta name='viewport' content='width=device-width, initial-scale=1.0'>\n\t<link href='../styles/library.css' rel='stylesheet'>\n\t<title>$name - $lang</title>\n<head>\n<body class='dark-theme'>\n\t<code>\n\t\t<pre>\n\t\t\t<!-- PUT THE CODE HERE -->\n\t\t</pre>\n\t</code>\n</body>\n</html>" >> codelibrary/$fame$suffix".html"
			echo $fame$suffix".html generated"
		else
			echo "invalid language "${langarr[i]}
		fi
	done
	echo "DONE! Dont forget to update the library.js file"
}


while getopts "n:l:" opt
do
   case "$opt" in
      n ) name="$OPTARG" ;;
      l ) languages="$OPTARG" ;;
      ? ) helpFunction ;; # Print helpFunction in case parameter is non-existent
   esac
done

# Print helpFunction in case parameters are empty
if [ -z "$name" ] || [ -z "$languages" ]
then
   echo "Some or all of the parameters are empty";
   helpFunction
fi

if ! [[ $name =~ ^[a-zA-Z]([0-9a-zA-Z]+)?([[:space:]][0-9a-zA-Z]+)*$ ]]
then
	echo "Invalid Problem Name";
   helpFunction
fi

langarr=(${languages//,/ })

generateHtml