import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc,
  query,
  where,
  orderBy,
  limit
} from 'firebase/firestore';
import { db } from './firebase';

export class PlayerService {
  static COLLECTION_NAME = 'players';

  // Get all players
  static async getAllPlayers() {
    try {
      const querySnapshot = await getDocs(collection(db, this.COLLECTION_NAME));
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error getting players:', error);
      throw error;
    }
  }

  // Get player by ID
  static async getPlayerById(playerId) {
    try {
      const docRef = doc(db, this.COLLECTION_NAME, playerId);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
      } else {
        throw new Error('Player not found');
      }
    } catch (error) {
      console.error('Error getting player:', error);
      throw error;
    }
  }

  // Add new player
  static async addPlayer(playerData) {
    try {
      const docRef = await addDoc(collection(db, this.COLLECTION_NAME), {
        ...playerData,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      return docRef.id;
    } catch (error) {
      console.error('Error adding player:', error);
      throw error;
    }
  }

  // Update player
  static async updatePlayer(playerId, updates) {
    try {
      const docRef = doc(db, this.COLLECTION_NAME, playerId);
      await updateDoc(docRef, {
        ...updates,
        updatedAt: new Date()
      });
    } catch (error) {
      console.error('Error updating player:', error);
      throw error;
    }
  }

  // Delete player
  static async deletePlayer(playerId) {
    try {
      await deleteDoc(doc(db, this.COLLECTION_NAME, playerId));
    } catch (error) {
      console.error('Error deleting player:', error);
      throw error;
    }
  }

  // Search players by criteria
  static async searchPlayers(criteria) {
    try {
      let q = collection(db, this.COLLECTION_NAME);
      
      if (criteria.nationality) {
        q = query(q, where('attributes.nationality', '==', criteria.nationality));
      }
      
      if (criteria.position) {
        q = query(q, where('attributes.position', '==', criteria.position));
      }
      
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error searching players:', error);
      throw error;
    }
  }
}