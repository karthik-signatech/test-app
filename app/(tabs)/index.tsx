import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const bellItems = [
  {
    title: 'Before First Bell',
    subtitle: '6:30-7:30 AM',
    icon: 'weather-sunset-up',
  },
  {
    title: 'Between Classes',
    subtitle: 'Throughout the day',
    icon: 'clock-outline',
  },
  {
    title: 'Midday Slump',
    subtitle: '11:00 AM – 2:00 PM',
    icon: 'coffee-outline',
  },
  {
    title: 'After a Hard Moment',
    subtitle: 'Anytime you need support',
    icon: 'heart-outline',
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <View style={styles.logoBox}>
            <Feather name="feather" size={28} color="#ffffff" />
          </View>

          <View style={styles.headerText}>
            <Text style={styles.greeting}>Good evening, Edward</Text>
            <Text style={styles.subtitle}>Take a reset when you need it</Text>
          </View>
        </View>

        <TouchableOpacity activeOpacity={0.85} style={styles.heroCard}>
          <View style={styles.heroIconBox}>
            <Feather name="alert-circle" size={36} color="#ffffff" />
          </View>

          <View style={styles.heroTextArea}>
            <Text style={styles.heroTitle}>Hard Moment?</Text>
            <Text style={styles.heroSubtitle}>
              Get an instant reset + script
            </Text>
          </View>

          <View style={styles.heroCircle} />
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>BELL TO BELL</Text>

        <View style={styles.list}>
          {bellItems.map((item) => (
            <TouchableOpacity
              key={item.title}
              activeOpacity={0.8}
              style={styles.card}
            >
              <View style={styles.cardIconBox}>
                <MaterialCommunityIcons
                  name={
                    item.icon as keyof typeof MaterialCommunityIcons.glyphMap
                  }
                  size={34}
                  color="#7d7d7d"
                />
              </View>

              <View style={styles.cardTextArea}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
              </View>

              <Ionicons name="chevron-forward" size={24} color="#d4d0cb" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    paddingHorizontal: 26,
    paddingTop: 34,
    paddingBottom: 40,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 36,
  },
  logoBox: {
    width: 54,
    height: 54,
    borderRadius: 17,
    backgroundColor: '#087f5b',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 18,
  },
  headerText: {
    flex: 1,
  },
  greeting: {
    fontSize: 28,
    color: '#2e2e2e',
    fontWeight: '300',
    letterSpacing: 0.2,
  },
  subtitle: {
    marginTop: 6,
    fontSize: 17,
    color: '#9a9a9a',
  },
  heroCard: {
    height: 138,
    borderRadius: 30,
    backgroundColor: '#c98b6e',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    marginBottom: 30,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.16,
    shadowOffset: { width: 0, height: 14 },
    shadowRadius: 18,
    elevation: 6,
  },
  heroIconBox: {
    width: 76,
    height: 76,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.18)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 22,
    zIndex: 2,
  },
  heroTextArea: {
    zIndex: 2,
  },
  heroTitle: {
    fontSize: 25,
    fontWeight: '800',
    color: '#ffffff',
  },
  heroSubtitle: {
    marginTop: 10,
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '600',
    letterSpacing: 0.4,
  },
  heroCircle: {
    position: 'absolute',
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: 'rgba(255,255,255,0.13)',
    right: -2,
    bottom: -2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#777777',
    letterSpacing: 1.1,
    marginBottom: 24,
  },
  list: {
    gap: 18,
  },
  card: {
    height: 110,
    borderRadius: 22,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: '#eeeeee',
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
    elevation: 2,
  },
  cardIconBox: {
    width: 68,
    height: 68,
    borderRadius: 16,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  cardTextArea: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#101820',
  },
  cardSubtitle: {
    marginTop: 8,
    fontSize: 17,
    color: '#999999',
  },
});