# print parameters from given section of given config file
# skiping empty lines and comments
function section() {
  fname=$1  # config file name
  sect=$2   # section name
 
  # 1. read config file
  # 2. print everything between section name '$sect' and next section
  # 3. delete sections names
  # 4. delete comments
  # 5. remove empty lines
  cat $fname | sed -n "/^\[$sect/,/^\[/ p" | sed 's,^\[.*,,' | sed 's,^#.*,,' | sed '/^ *$/ d'
}

