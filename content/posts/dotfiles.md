---
date: '2025-01-09T12:07:26+01:00'
draft: false 
title: 'Dotfiles'
tags: ["config", "dotfiles"]
cover:
    image: "/dotfiles.png"
    alt: "Dotfiles page image"
    caption: ""
---

### The problem

The first thing you notice when setting up a new machine is that you wish you had an easy way of restoring your highly-customized setup from your previous machine. There are many ways of going about doing this. Maybe you keep a separate repository for each config, use a bare git repo, or the something similar. 

The solution: `gnu stow`

Using GNU Stow we create symlinks between our dotfiles repository, housing all of our config files, and our home directory. By mirroring the `~/.config/` structure (and also the placement of files like .zshrc etc.) we can simply run `stow .` in the repo directory to create the appropriate symlinks. The `.git/` directory is ignored. 

An example dotfiles structure might look like this: 
```plaintext
.dotfiles       << run 'stow .' or similar here
├── .config
│   ├── alacritty
│   │   └── alacritty.toml
│   ├── ghostty
│   │   └── config
│   ├── kitty
│   │   └── ...
│   ├── nvim
│   │   └── ...
│   └── tmux
│       └── ...
├── .git/
└── .zshrc
```
Maintaining changes to your dotfiles is now as simple as commiting to a repository. Always make a backup before trying things. Check out my .dotfiles repo [here](https://github.com/gbo-dev/.dotfiles).
