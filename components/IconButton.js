import { Pressable,StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function IconButton({ onPress, icon, color }) {
  return (
    <Pressable onPress={onPress} style={(preessed)=> preessed && styles.pressed}>
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
    pressed:{
        opacity:0.7,
    }
});