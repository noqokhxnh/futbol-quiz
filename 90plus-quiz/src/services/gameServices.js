import { collection, doc, getDoc, getDocs, query, where, limit, orderBy } from 'firebase/firestore';
import { format } from 'date-fns';
import { db } from './firebase';

const dailyQuestionsRef = collection(db, 'dailyQuestions');

export const gameServices = {
  // Get today's questions
  getDailyQuestions: async () => {
    try {
      const today = format(new Date(), 'yyyy-MM-dd');
      const questionDoc = await getDoc(doc(dailyQuestionsRef, today));
      
      if (!questionDoc.exists()) {
        throw new Error('No questions available for today');
      }
      
      return {
        id: questionDoc.id,
        ...questionDoc.data()
      };
    } catch (error) {
      console.error('Error fetching daily questions:', error);
      throw error;
    }
  },

  // Get specific game type question for today
  getDailyGameQuestion: async (gameType) => {
    try {
      const questions = await gameServices.getDailyQuestions();
      return questions.questions[gameType];
    } catch (error) {
      console.error(`Error fetching ${gameType} question:`, error);
      throw error;
    }
  },

  // Get last N days questions for history
  getQuestionsHistory: async (days = 7) => {
    try {
      const today = format(new Date(), 'yyyy-MM-dd');
      
      const q = query(
        dailyQuestionsRef,
        where('date', '<=', today),
        orderBy('date', 'desc'),
        limit(days)
      );
      
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error fetching questions history:', error);
      throw error;
    }
  }
};
