```
                                      
                    | |------------| |
                 .-'| |            | |`-.
               .'   | |            | |   `.
            .-'      \ \          / /      `-.
          .'        _.| |--------| |._        `.
         /    -.  .'  | |        | |  `.  .-    \
        /       `(    | |________| |    )'       \
       |          \  .i------------i.  /          |
       |        .-')/                \(`-.        |
       \    _.-'.-'/     ________     \`-.`-._    /
        \.-'_.-'  /   .-' ______ `-.   \  `-._`-./\
         `-'     /  .' .-' _   _`-. `.  \     `-' \\
                | .' .' _ (3) (2) _`. `. |        //
               / /  /  (4)  ___  (1)_\  \ \       \\
               | | |  _   ,'   `.==' `| | |       //
               | | | (5)  | E.L.| (O) | | |      //
               | | |   _  `.___.' _   | | |      \\
               | \  \ (6)  _   _ (9) /  / |      //
               /  `. `.   (7) (8)  .' .'  \      \\
              /     `. `-.______.-' .'     \     //
             /        `-.________.-'        \ __//
            |                                |--'
            |================================|
            "--------------------------------"
                                              
```

# Vagrant Telephone

* `npm install -g telephone`
* On your local:   `telephone call -c path/to/telephone.json`
* On your vagrant: `telephone answer -c /path/to/telephone.json`
* Now use somethign like [nodemon](https://github.com/remy/nodemon) and watch your restart file: `nodemon --watch /path/to/restart-file server.js`

### Example telephone.json

```
{
  "host": "10.0.0.1",
  "tasks": [
    {
      "name": "Run Webpack",
      "cmd": "cd /home/vagrant/site && webpack",
      "watch": ["./site/app/**/*.js", "./site/app.js", "./site/app/**/*.jsx"] 
    },
    {
      "name": "Do something else",
      "cmd": "cd /home/vagrant/site/wordpress && touch update.txt",
      "watch": "./wordpress/**/*"
    }
  ]
}
```
