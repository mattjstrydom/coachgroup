export interface CoachingProgram {
  title: string;
  description: string;
  timeAllocation: {
    contactSessions: number; // percentage
    onlineSessions: number; // percentage
    selfStudy: number; // percentage
  };
  impactModel: {
    internCoach: string[];
    students: string[];
    community: string[];
  };
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  description: string;
}

export interface Testimonial {
  author: string;
  content: string;
}