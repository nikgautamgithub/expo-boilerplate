import { Link, useRouter } from 'expo-router';
import { Button, H1, Paragraph, YStack } from 'tamagui';

import { MyStack } from '../components/MyStack';

export default function Home() {
  const router = useRouter();

  return (
    <MyStack>
      <YStack maxWidth={600}>
        <H1 textAlign="center">Welcome to GrowFit.</H1>
        <Paragraph textAlign="center">Gyunther</Paragraph>
      </YStack>

      <YStack gap="$2.5">
        <Link className="border bg-green-300 p-2" href="/home">
          Kartik
        </Link>
        <Button onPress={() => router.push('/tabs')}>Go to tabs page</Button>
      </YStack>
    </MyStack>
  );
}
