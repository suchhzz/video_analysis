import PersonIcon from '@mui/icons-material/Person';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { TextFields, Pets } from '@mui/icons-material';

export const categoryConfig = {
    people: {
        icon: PersonIcon,
        mainColor: 'primary.main',
        buttonColor: 'primary',
        borderColor: 'primary.light',
    },

    car: {
        icon: DirectionsCarIcon,
        mainColor: 'grey.700',
        buttonColor: 'inherit',
        borderColor: 'grey.400',
    },

    text: {
        icon: TextFields,
        mainColor: '#482880',
        buttonColor: 'inherit',
        borderColor: '#8561c5',
    },

    animal: {
        icon: Pets,
        mainColor: 'warning.main',
        buttonColor: 'warning',
        borderColor: 'warning.light',
    },
} as const;

export type Category = keyof typeof categoryConfig;
