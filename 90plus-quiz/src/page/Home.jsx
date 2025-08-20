import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/common/Header';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            90+ Football Quiz
          </h1>
          <p className="text-gray-300 text-lg">
            Test your football knowledge with our daily challenges
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          <Link to="/play/guessPlayer">
            <Card interactive className="h-full">
              <h2 className="text-xl font-semibold mb-2 text-emerald-500">Guess the Player</h2>
              <p className="text-gray-400">Answer questions to guess the mystery footballer</p>
            </Card>
          </Link>

          <Link to="/play/pyramid">
            <Card interactive className="h-full">
              <h2 className="text-xl font-semibold mb-2 text-emerald-500">Pyramid</h2>
              <p className="text-gray-400">Order players by their achievements</p>
            </Card>
          </Link>

          <Link to="/play/footballLink">
            <Card interactive className="h-full">
              <h2 className="text-xl font-semibold mb-2 text-emerald-500">Football Link</h2>
              <p className="text-gray-400">Find the connection between two players</p>
            </Card>
          </Link>

          <Link to="/play/legacy">
            <Card interactive className="h-full">
              <h2 className="text-xl font-semibold mb-2 text-emerald-500">Legacy</h2>
              <p className="text-gray-400">Guess legendary players from their career timeline</p>
            </Card>
          </Link>
        </div>

        <div className="mt-12 text-center">
          <Button variant="primary" size="lg" onClick={() => window.location.href = '/games'}>
            Play Daily Challenge
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Home;
