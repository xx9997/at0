#!/bin/sh

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
source $HOME/.bashrc

nvm install 14.16.1
npm install yarn -g
npm install pm2 -g

yum install -y git
git clone https://github.com/xx9997/at0.git
cd at0
yarn
pm2 start index.js
