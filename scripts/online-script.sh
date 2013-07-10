#!/bin/bash

echo "Starting T4T Number Crhuncher (Debug mode)..."

### Tunables
T4T_ROOT="/var/lib/t4t"
WWW_ROOT="/var/www/html"
GIT_URL="git@github.com:wavesoft/VirtualAtomSmasher.git"
HTTP_URL="/smasher"

## Deploy key SmasherVM01
[ ! -d /root/.ssh ] && mkdir /root/.ssh
cat <<EOF > /root/.ssh/id_rsa
-----BEGIN RSA PRIVATE KEY-----
MIIEoQIBAAKCAQEAtPrP7o05bCbJ0VPTiz9QULDG0Msdba8KoZUROAO1LZiVfJP5
7gBfyK+3dr5me4js1ztj+P3hg0qnliPyAlSfWOERhDmklkMqFQozznvvYTEQncxt
o3/SqE/5FwKFWkEwEUkmaSp8zXiDnjv9dF4BBezH+gRGqiJKuVC7dwb6I1R9LND0
g9Vp4sMxQeu2oZC/etv+7VvX8O8dxhtuoAMPGiUorDtYcZTI6mS4C4TDg6iyj2sn
jXDbVI+dd8fuPUEcS/au1z/t55IccArJaQvyH99lRZBZPCCsBJ4dXv/HUTtx+0Z9
v96sYbsFTS28h4sC6/VfSwBjyymI3G3uV2Q1qQIBIwKCAQB27fZa7xcbL26uISSd
VX3r4eG8aDfo/f+sAt9t887U0fvVhdAgDt/bpqvDD2fqx7GUwKDIMc61XPHJEE6T
0TWDjJZ7dlY2263wka0ECEzZeAOa5WyepHR9O94zsTMPbKqPBC8vKoyHBg1ZWp89
11/CEKCrnGjzdZ7RjNL2ckya3qURarSun0LUFVPh8k+iGPBbiGuFAUqHmli5iVjh
Wy9Afs4NW+7tz+aVdayEpYKl4PVHnoMM+/3hJlp68bZsQTxYEDIq41C4mkGIRiN4
5XYkSZO3bCB8u9DcPscVBiVzfUAg+IdKVFLDG+n2WjgYLkrtXvLF2ZTO79GsPYfn
xMF/AoGBANkEPm2zL3HuCLW5J80w8GGpXpeD7KTm4D1rW71MEvn7D+/DiNqMZdy1
aIBc8XatjMD0LRWGMQcoVfGuBrzet0p0XqexBhcRCDazqfki6Fzjz3/HTz6pTtxY
l59blBv0xOqKiAOq/J86qCOvXZU8WMOKU91paN6fBel/PWAkLF3bAoGBANV9X3Pd
Lgyx/jOJ+iJYkK1GM1+fCQ+Jnm+ZdEBWDEemrU1DrCiRjmDL+zxI5VmApDmSbj95
Dka0NvWUOxvE7uVRlaSL6w4WqkpcTx/cFFDCDzxcALydWvYD03uVg7UnJzwdLgU/
mWKwQXJ0148mZjyqgFM6FMQdwc+Z3g1M9ivLAoGAN83kKtZOB1p3RKv0SrTQGRzs
cBqb7+OYv1Ye54iXKlaAcNqCRtOlKiAE7c7Bv250pqUwKhsxLbnqNtT6axSyygCq
oCY0xBpSkbkrtRea1g6xsySfWUF6rbBhgL/G/9/a3TmQsHxs2HzMJm7sLbBumK6K
mAUpmFTHAYceaS3fhdkCgYBPS9L/JkRN27YwZnLZjpwjGhMU40yCHSw4FG0B9BMw
jl2gWvbNPWDE3gzb4I+zh410eDeT6yKPSkBMliSVSSWIYCGjhG0/v0aQpfGA3LcW
rnqwBOpUr3mOk7TzY2tvK8y+jn7Ov9ni08CJmRzdZgi3codvXrdBh2U+evq0e6vk
YQKBgQDM8rectA/IjXivFVJX6raPAWbHNi9aY1BVuNcg+71MjYCy4PMAnb/c0GjQ
E5YWMKO2oIvXHRTK6qVt2AVvnjwmv7d/IRoHbqvPGAo35P8AMLk3OMDir0Rla483
iSFfjjzaWArA/jE0MHSk5s1PusVttlouY/VxO4B774sW8okaog==
-----END RSA PRIVATE KEY-----
EOF

#### Do not modify anything after this ####

# Disable strict host check on github
echo -e "Host github.com\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config

# Fetch git repository
mkdir ${T4T_ROOT}
git clone ${GIT_URL} ${T4T_ROOT}/git

# Grant permissions to all
chmod -R a+r ${T4T_ROOT}

# Move scripts folder out of the web context
mv ${T4T_ROOT}/git/scripts ${T4T_ROOT}/

# Link to the http/smasher folder
ln -s ${T4T_ROOT}/git ${WWW_ROOT}${HTTP_URL}
chmod a+xr ${WWW_ROOT}${HTTP_URL}

# Create a forwarding URL for people who just come from the landing page
cat <<EOF > ${WWW_ROOT}/index.php
<?php header("Location: ${HTTP_URL}") ?>
<!DOCTYPE html>
<html>
	<head>
		<title>Moved</title>
		<meta http-equiv="refresh" content="0; URL=${HTTP_URL}">
	</head>
	<body>
		<h1>Moved Temporarily</h1>
		<p>You will be redirected. If not, click <a href="${HTTP_URL}">here</a>.</p>
	</body>
</html>
EOF

# Launch boot scripts
cd ${T4T_ROOT}/scripts
./boot.sh&
