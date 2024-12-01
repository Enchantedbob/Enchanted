export interface SlideData {
  title: string;
  description: string;
}

export interface SlideshowProps {
  slides: SlideData[];
  variant?: 'default' | 'testimonial' | 'about';
}

export interface SlideProps extends SlideData {
  isActive: boolean;
  variant?: 'default' | 'testimonial' | 'about';
}

export interface NavigationButtonProps {
  direction: 'prev' | 'next';
  onClick: () => void;
}