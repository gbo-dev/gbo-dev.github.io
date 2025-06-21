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

The first thing you notice when setting up a new machine is that you wish you had an easy way of restoring your highly-customized setup from your previous machine. There are many ways of going about doing this. Maybe you keep a separate repository for each config, use a bare git repo, or the something similar. This can be quite tedious.

**The solution**: `gnu stow`

Using GNU Stow we create symlinks between our dotfiles repository, housing all of our config files, and our home directory. Using a `.stow-local-ignore` we can ignore certain files or directories that we don't want to symlink.

For each package in the repo that you want symlinked, run:
```bash
stow <package> # For example: stow .zshrc
```

The symlinks will be interpreted as the files in our dotfiles directory, meaning any changes easily be tracked by git. This allows us to easily configure them as normal, and also easily add the changes to our dotfiles repository.

An example dotfiles structure might look like this:
```plaintext
.dotfiles
├── .config
│   ├── alacritty
│   │   └── alacritty.toml
│   ├── ghostty
│   │   └── config
│   ├── kitty
│   │   └── ...
│   ├── nvim
│   │   └── ...
│   └── tmux
│       └── ...
├── .git
└── .zshrc
```

### Example usage on a fresh machine

1. Clone your dotfiles to your home directory:
   ```bash
   git clone <your-dotfiles-repo> ~/.dotfiles
   ```

2. For each package in the repo that you want symlinked, run:
   ```bash
   stow <package> # For example: stow .zshrc
   ```

### Installing on a machine with existing configs

> **Warning:** The `--adopt` flag will overwrite the contents of your dotfiles directory with the contents from your target directory.

If you already have existing configurations you want to back up or adopt:

1. Clone the repo and cd into it
2. For each package that already exists on the machine, use the `--adopt` flag:
   ```bash
   stow <package> --adopt # For example: stow .zshrc --adopt
   ```

Maintaining changes to your dotfiles is now as simple as commiting to a repository.

Always make a backup before trying things. Check out my .dotfiles repo [here](https://github.com/gbo-dev/.dotfiles).
