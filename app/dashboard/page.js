import { Activity, Flame, Moon, Droplets, TrendingUp, Target, Zap, Heart, Calendar } from 'lucide-react';
import DashboardStats from './DashboardStats';

export const metadata = {
  title: 'Dashboard - HealthTracker',
  description: 'View your health metrics dashboard with real-time stats for steps, calories, sleep, and hydration.',
};

const weeklyStepsData = [
  { day: 'Mon', value: 9200 },
  { day: 'Tue', value: 10500 },
  { day: 'Wed', value: 7800 },
  { day: 'Thu', value: 11200 },
  { day: 'Fri', value: 8900 },
  { day: 'Sat', value: 12000 },
  { day: 'Sun', value: 8432 },
];

const weeklySleepData = [
  { day: 'Mon', value: 7.2 },
  { day: 'Tue', value: 8.1 },
  { day: 'Wed', value: 6.8 },
  { day: 'Thu', value: 7.5 },
  { day: 'Fri', value: 7.8 },
  { day: 'Sat', value: 8.5 },
  { day: 'Sun', value: 7.5 },
];

function BarChart({ title, data, maxValue, gradientFrom, gradientTo, icon: Icon, iconColor }) {
  return (
    <div className="bg-white dark:bg-[#3D322C] rounded-2xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-[#3D2E24] dark:text-[#FAF7F2]">{title}</h2>
        <Icon className={`w-5 h-5 ${iconColor}`} />
      </div>
      <div className="flex items-end justify-between gap-2 h-48">
        {data.map((item, index) => {
          const heightPercent = (item.value / maxValue) * 100;
          return (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div
                className="w-full rounded-t-lg transition-all duration-500"
                style={{
                  height: `${heightPercent}%`,
                  background: `linear-gradient(to top, ${gradientFrom}, ${gradientTo})`,
                }}
              />
              <span className="text-xs text-[#7A6B5E] dark:text-[#B8A99A] mt-2">{item.day}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen pt-16 bg-[#FAF7F2] dark:bg-[#2C2420]">
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 text-[#3D2E24] dark:text-[#FAF7F2]">Dashboard</h1>
            <p className="text-[#7A6B5E] dark:text-[#B8A99A] flex items-center gap-2">
              <Calendar className="w-4 h-4" /> Sunday, May 3 2026
            </p>
          </div>

          <DashboardStats />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-8">
            <BarChart
              title="Weekly Steps"
              data={weeklyStepsData}
              maxValue={12000}
              gradientFrom="#8B7355"
              gradientTo="#C4A77D"
              icon={TrendingUp}
              iconColor="text-[#C4A77D]"
            />
            <BarChart
              title="Weekly Sleep"
              data={weeklySleepData}
              maxValue={9}
              gradientFrom="#6B5344"
              gradientTo="#8B7355"
              icon={Moon}
              iconColor="text-[#6B5344]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white dark:bg-[#3D322C] rounded-2xl p-6 shadow-lg flex items-center gap-4">
              <div className="p-3 rounded-xl bg-[#C4A77D]/20">
                <Target className="w-6 h-6 text-[#8B7355]" />
              </div>
              <div>
                <p className="text-2xl font-bold font-mono text-[#3D2E24] dark:text-[#FAF7F2]">12</p>
                <p className="text-sm text-[#7A6B5E] dark:text-[#B8A99A]">Goals Achieved</p>
              </div>
            </div>

            <div className="bg-white dark:bg-[#3D322C] rounded-2xl p-6 shadow-lg flex items-center gap-4">
              <div className="p-3 rounded-xl bg-[#D4A574]/20">
                <Zap className="w-6 h-6 text-[#D4A574]" />
              </div>
              <div>
                <p className="text-2xl font-bold font-mono text-[#3D2E24] dark:text-[#FAF7F2]">7</p>
                <p className="text-sm text-[#7A6B5E] dark:text-[#B8A99A]">Day Streak</p>
              </div>
            </div>

            <div className="bg-white dark:bg-[#3D322C] rounded-2xl p-6 shadow-lg flex items-center gap-4">
              <div className="p-3 rounded-xl bg-[#8B7355]/20">
                <Heart className="w-6 h-6 text-[#8B7355]" />
              </div>
              <div>
                <p className="text-2xl font-bold font-mono text-[#3D2E24] dark:text-[#FAF7F2]">72</p>
                <p className="text-sm text-[#7A6B5E] dark:text-[#B8A99A]">Avg BPM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}