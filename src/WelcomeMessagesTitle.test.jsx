import { WelcomeMessagesTitle } from "./WelcomeMessagesTitle";
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('WelcomeMessagesTitle Component', () => {
    test('renders the correct title', () => {
        render(<WelcomeMessagesTitle />);
        expect(screen.getByText('Welcome Messages')).toBeInTheDocument();
    });
});