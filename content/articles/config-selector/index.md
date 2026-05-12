+++
title = "Navigate configs faster"
description = "How to use fzf to navigate your dotfiles quickly"
date = 2025-02-28T16:28:36+01:00
+++

I previously used shell aliases to quickly access the config files I was modifying often. Not great. This became quite cumbersome when the number of configs grew.

Instead, I now use a small `pick` utility to quickly select which config to edit or navigate to. Very simple logic, but high quality of life conveniences.

### Usage

The `config` function opens fzf to let you pick a config directory, then launches your `$EDITOR` in that directory. You can also pass a query directly to skip the interactive picker.

```zsh
config                  # Config selection in fzf, opening in $EDITOR
config niri             # Opens niri config in $EDITOR
```

I alias `config` to `c` for even quicker access:

```zsh
alias c="config"
c niri                  # Same as above, but shorter
```

### How it works

The setup consists of two parts: a `pick` script and a `config` function.

`pick` is a small bash script that uses `fzf` to list directories from configurable roots. It supports two modes:

- **`pick config`**: Scans `~/.config/*`
- **`pick project`**: Scans `~/dev/*`

It supports both interactive selection and direct query filtering.

The `config` function wraps `pick config` to cd into the selected directory and open `$EDITOR`:

```zsh
config() {
  local dir
  dir="$(pick config "${1:-}")" || return
  cd "$dir" || return
  ${EDITOR:-nvim} .
}
```

### The `pick` script

```bash
#!/usr/bin/env bash
set -euo pipefail

shopt -s nullglob

if ! command -v fzf >/dev/null 2>&1; then
  printf '%s\n' "fzf not found. Install fzf first." >&2
  exit 1
fi

mode="${1:-project}"
query="${2:-}"
roots=()
extra=()

case "$mode" in
  project)
    prompt="Projects> "
    roots=("$HOME/dev")      # scans subdirectories
    extra=()                 # exact paths
    ;;
  config)
    prompt="Config> "
    roots=("$HOME/.config")  # scans subdirectories
    extra=()                 # exact paths
    ;;
  *)
    printf '%s\n' "Usage: pick [project|config] [query]" >&2
    exit 2
    ;;
esac

dirs=()

for root in "${roots[@]-}" ; do
  [ -d "$root" ] || continue
  for dir in "$root"/*/; do
    [ -d "$dir" ] || continue
    dirs+=("${dir%/}")
  done
done

for dir in "${extra[@]-}"; do
  [ -d "$dir" ] && dirs+=("$dir")
done

if [ "${#dirs[@]}" -eq 0 ]; then
  printf '%s\n' "No directories found." >&2
  exit 1
fi

if [ -n "$query" ]; then
  result="$(printf '%s\n' "${dirs[@]}" | sort -u | fzf --filter="$query" | head -n 1 || true)"
  if [ -z "$result" ]; then
    printf '%s\n' "No match found for: $query" >&2
    exit 1
  fi
  printf '%s\n' "$result"
else
  printf '%s\n' "${dirs[@]}" | sort -u | fzf --prompt="$prompt" --height=50% --reverse
fi
```

Explore in my [.files](https://github.com/gbo-dev/.dotfiles).
