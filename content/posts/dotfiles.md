---
date: '2025-01-09T12:07:26+01:00'
draft: false
title: 'Dotfiles'
tags: ["config", "dotfiles"]
cover:
    image: "/dotfiles.webp"
    alt: "Dotfiles page image"
    caption: ""
---

### The problem

The first thing you notice when setting up a new machine is that you wish you had an easy way of restoring your highly-customized setup from your previous machine. There are many ways of going about doing this. Maybe you keep a separate repository for each config, use a bare git repo, or the something similar. This can be quite tedious.

**The solution**: `gnu stow`

Using GNU Stow we create symlinks between our dotfiles repository, housing all of our config files, and our home directory. Using a `.stow-local-ignore` we can ignore certain files or directories that we don't want to symlink.

Each package in the dotfiles repository contains the complete directory structure that mirrors where the files should be placed in your home directory. For each package you want to symlink, run:
```bash
stow <package> # For example: stow zsh
```

The symlinks will be interpreted as the files in our dotfiles directory, meaning any changes can easily be tracked by git. This allows us to configure them as normal, and also easily add the changes to our dotfiles repository.

A proper dotfiles structure using stow packages looks like this:
```plaintext
.dotfiles/
├── alacritty/
│   └── .config/
│       └── alacritty/
│           └── alacritty.toml
├── ghostty/
│   └── .config/
│       └── ghostty/
│           └── config
├── kitty/
│   └── .config/
│       └── kitty/
│           └── ...
├── nvim/
│   └── .config/
│       └── nvim/
│           └── ...
├── tmux/
│   └── .config/
│       └── tmux/
│           └── ...
├── zsh/
│   ├── .zshrc
│   ├── .zsh_aliases
│   └── .oh-my-zsh/
│       └── ...
├── .git/
├── .stow-local-ignore
└── README.md
```

### Example usage on a fresh machine

1. Clone your dotfiles to your home directory:
   ```bash
   git clone <your-dotfiles-repo> ~/.dotfiles
   ```

2. Navigate to your dotfiles directory and stow the packages you want:
   ```bash
   cd ~/.dotfiles
   stow zsh
   stow alacritty
   stow nvim
   ```

Maintaining changes to your dotfiles is now as simple as commiting to a repository.

Always make a backup before trying things. Check out my .dotfiles repo [here](https://github.com/gbo-dev/.dotfiles).
