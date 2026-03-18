# Mock App Structure

```text
mock-app/
  App.js
  app.json
  babel.config.js
  package.json
  theme.js
  src/
    components/
      Button.js
      Card.js
      Container.js
      Input.js
      Text.js
    screens/
      DetailsScreen.js
      HomeScreen.js
```

## theme.js usage example

```js
import theme from './theme';

const styles = StyleSheet.create({
  section: {
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background,
    borderRadius: theme.radius.md,
  },
});
```

## Run with Expo SDK 54

```powershell
cd c:\Users\pablo\Desktop\design-system-extractor\mock-app
npm install
npx expo start --clear
```

If Expo Go still shows an older bundle, fully close Expo Go and restart the dev server with `--clear`.
