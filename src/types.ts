// Interface for Quest data
interface Quest {
  id: string;
  title: string;
  description: string;
  points: number;
  image: string;
  isFeatured: boolean;
}

// Interface for Quest completion record
interface QuestCompletionRecord {
  questId: string;
  completionDate: Date;
  userId: string;
  pointsEarned: number;
}
