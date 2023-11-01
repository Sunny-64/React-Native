# React Native Basics

### SafeAreaView 
- used for mobiles that have notches and the text or elements hide behind it.. 

### view 
- acts like a div/container

### Text 
- acts like like a paragraph

### style 
- used to give styeling just like in react 

#### StyleSheet import = used to create styles object 
```
const styles = StyleSheet.create({
    container : {
        flex : 1, 
        justifyContent : 'center'
    }
})
```

### useColorScheme
The useColorScheme React hook provides and subscribes to color scheme updates from the Appearance module. The return value indicates the current user preferred color scheme. The value may be updated later, either through direct user action (e.g. theme selection in device settings) or on a schedule (e.g. light and dark themes that follow the day/night cycle).

```
 const colorScheme = useColorScheme();
```

```
<Text>useColorScheme(): {colorScheme}</Text>
```

### Creating Cards

- Elevation property is used for providing 3d looks to cards and containers

```
elevation : 2
shadowOffset : {
    width : 1, 
    height : 1, 
}, 
shadowColor : #000000, 
shadowOpacity : 0.8
```

### Touchable opacity 
- A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, dimming it.

