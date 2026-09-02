import { db } from './firebase';
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
} from 'firebase/firestore';
import { Inquiry, Tray, Machine } from './types';

export const INQUIRIES = 'inquiries';
export const TRAYS = 'trays';
export const MACHINES = 'machines';

export async function addInquiry(data: Omit<Inquiry, 'id' | 'createdAt'>) {
  const docRef = await addDoc(collection(db, INQUIRIES), {
    ...data,
    status: data.status || 'new',
    createdAt: new Date(),
  });
  return docRef.id;
}

export async function getTrays(): Promise<(Tray & { id: string })[]> {
  const snap = await getDocs(collection(db, TRAYS));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as Tray & { id: string }));
}

export async function getMachines(): Promise<(Machine & { id: string })[]> {
  const snap = await getDocs(collection(db, MACHINES));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as Machine & { id: string }));
}

export async function deleteTray(id: string) {
  await deleteDoc(doc(db, TRAYS, id));
}

export async function deleteMachine(id: string) {
  await deleteDoc(doc(db, MACHINES, id));
}
