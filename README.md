## Repository for my personal website.

I started this project here: https://facebook.github.io/create-react-app/docs/getting-started

Built with React, React Router, and Bootstrap (via [reactstrap](https://reactstrap.github.io/)).

### Development

1. Install dependencies

```bash
🐒  yarn install
```

2. Start the local server

```bash
🐒  yarn start
```

### Fix Vulnerabilities

```bash
🐒  yarn upgrade --latest 
🐒  yarn install # might be required after upgrade
```


### Deployment

```bash
🐒  git checkout source 
🐒  yarn deploy
```

### Scrape Google Photos

I am using the scrape-google-photos tool to scrape albums from google photos.

https://github.com/alexcrist/scrape-google-photos.git

```bash
scrape-google-photos "<my_album_url>" --write --file=my_file_name
```
