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
* On your local:   `telephone call -a <vagrant-box-ip>`
* On your vagrant: `telephone answer -t /path/to/restart-file`
* Now use somethign like [nodemon](https://github.com/remy/nodemon) and watch your restart file: `nodemon --watch /path/to/restart-file server.js`