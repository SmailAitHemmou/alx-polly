import { render, screen } from '@testing-library/react';
import { PollResultChart } from './PollResultChart';
import { PollDetails } from './poll-details';
import type { Poll } from '@/lib/types';

// Mock the ResizeObserver
const ResizeObserverMock = jest.fn(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));
global.ResizeObserver = ResizeObserverMock;

describe('PollResultChart', () => {
  it('renders the chart with data', () => {
    const data = [
      { option: 'Option 1', votes: 10 },
      { option: 'Option 2', votes: 20 },
    ];
    render(<PollResultChart data={data} />);
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('renders the chart with empty data', () => {
    render(<PollResultChart data={[]} />);
    expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
  });
});

describe('PollDetails', () => {
  const poll: Poll = {
    id: '1',
    title: 'Test Poll',
    description: 'Test Description',
    options: [
      { id: '1', text: 'Option 1', votes: 10 },
      { id: '2', text: 'Option 2', votes: 20 },
    ],
    totalVotes: 30,
    createdAt: new Date(),
    createdBy: {
      name: 'Test User',
      avatar: '',
    },
    isActive: false,
    allowMultipleVotes: false,
    hasVoted: true,
  };

  it('shows the poll result chart when the user has voted', () => {
    render(<PollDetails poll={poll} />);
    expect(screen.getByText('Poll Results Chart')).toBeInTheDocument();
  });
});
