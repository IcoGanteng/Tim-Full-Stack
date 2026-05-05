import { Activity, Heart, Flame, Moon, Droplets, TrendingUp, Users, Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const stats = [
  { label: 'Active Users', value: '50K+', icon: Users, color: 'text-[#8B7355]' },
  { label: 'Goals Completed', value: '1M+', icon: Award, color: 'text-[#C4A77D]' },
  { label: 'Days Tracked', value: '10M+', icon: Activity, color: 'text-[#D4A574]' },
];

const features = [
  { title: 'Steps Tracking', description: 'Monitor your daily steps with accurate real-time tracking and history.', icon: Activity, gradientFrom: '#8B7355', gradientTo: '#6B5344' },
  { title: 'Calorie Counter', description: 'Track your calorie intake and expenditure with detailed analytics.', icon: Flame, gradientFrom: '#D4A574', gradientTo: '#C4A77D' },
  { title: 'Sleep Analysis', description: 'Understand your sleep patterns and improve rest quality.', icon: Moon, gradientFrom: '#6B5344', gradientTo: '#8B7355' },
  { title: 'Hydration Goals', description: 'Stay hydrated with smart reminders and daily tracking.', icon: Droplets, gradientFrom: '#C4A77D', gradientTo: '#D4A574' },
];

const testimonials = [
  { name: 'Sarah Chen', role: 'Fitness Enthusiast', content: 'HealthTracker has completely transformed how I approach my daily wellness. The bento grid layout makes it so easy to see everything at a glance.', rating: 5, avatarColor: '#8B7355' },
  { name: 'Marcus Johnson', role: 'Software Engineer', content: 'Finally, a health app that looks as good as it performs. The warm color palette is perfect for morning tracking.', rating: 5, avatarColor: '#C4A77D' },
  { name: 'Elena Rodriguez', role: 'Yoga Instructor', content: 'The sleep analysis feature helped me understand my rest patterns better than any other app ive tried.', rating: 5, avatarColor: '#6B5344' },
];

const howItWorks = [
  { step: 1, title: 'Create Profile', description: 'Set up your personal health profile with your goals' },
  { step: 2, title: 'Track Daily', description: 'Log your activities, meals, and sleep effortlessly' },
  { step: 3, title: 'Analyze Progress', description: 'View beautiful insights and track your improvement' },
  { step: 4, title: 'Achieve Goals', description: 'Hit your targets with personalized recommendations' },
];

function FeatureItem({ feature }) {
  const Icon = feature.icon;
  return (
    <div className="bg-white dark:bg-[#3D322C] rounded-2xl p-6 shadow-lg hover:-translate-y-0.5 transition-transform cursor-pointer">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `linear-gradient(135deg, ${feature.gradientFrom}, ${feature.gradientTo})` }}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-[#3D2E24] dark:text-[#FAF7F2]">{feature.title}</h3>
      <p className="text-sm text-[#7A6B5E] dark:text-[#B8A99A]">{feature.description}</p>
    </div>
  );
}

function TestimonialItem({ testimonial }) {
  const initials = testimonial.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  return (
    <div className="bg-white dark:bg-[#3D322C] rounded-2xl p-6 shadow-lg hover:-translate-y-0.5 transition-transform cursor-pointer">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold" style={{ backgroundColor: testimonial.avatarColor }}>
          {initials}
        </div>
        <div>
          <h4 className="text-sm font-semibold text-[#3D2E24] dark:text-[#FAF7F2]">{testimonial.name}</h4>
          <p className="text-xs text-[#7A6B5E] dark:text-[#B8A99A]">{testimonial.role}</p>
        </div>
      </div>
      <div className="flex gap-1 mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Heart key={i} className="w-4 h-4 fill-[#D4A574] text-[#D4A574]" />
        ))}
      </div>
      <p className="text-sm text-[#7A6B5E] dark:text-[#B8A99A] italic">"{testimonial.content}"</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-16">
            <div className="bg-white dark:bg-[#3D322C] rounded-2xl p-8 shadow-lg">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#3D2E24] dark:text-[#FAF7F2]">
                Your Personal <span className="text-[#8B7355]">Health</span> Companion
              </h1>
              <p className="text-lg text-[#7A6B5E] dark:text-[#B8A99A] mb-8">
                Track your steps, calories, sleep, and hydration with our beautiful, intuitive health tracking app. Start your wellness journey today.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/dashboard" className="flex items-center gap-2 px-6 py-3 bg-[#8B7355] hover:bg-[#6B5344] text-white rounded-xl font-medium transition-colors cursor-pointer">
                  Start Tracking <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#8B7355] to-[#6B5344] rounded-2xl p-8 shadow-lg flex items-center justify-center min-h-[300px]">
              <div className="text-center text-white">
                <Activity className="w-24 h-24 mx-auto mb-4 opacity-90" />
                <p className="text-xl font-medium opacity-90">Real-time Health Monitoring</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-[#3D322C] rounded-2xl p-6 shadow-lg flex items-center gap-4 cursor-pointer hover:-translate-y-0.5 transition-transform">
                <div className={`p-3 rounded-xl bg-[#E8D5C4] dark:bg-[#5A4A40] ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold font-mono text-[#3D2E24] dark:text-[#FAF7F2]">{stat.value}</p>
                  <p className="text-[#7A6B5E] dark:text-[#B8A99A]">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#3D2E24] dark:text-[#FAF7F2]">Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {features.map((feature, index) => (
                <FeatureItem key={index} feature={feature} />
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#3D2E24] dark:text-[#FAF7F2]">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {howItWorks.map((item, index) => (
                <div key={index} className="bg-white dark:bg-[#3D322C] rounded-2xl p-6 shadow-lg relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#8B7355] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 mt-4 text-[#3D2E24] dark:text-[#FAF7F2]">{item.title}</h3>
                  <p className="text-[#7A6B5E] dark:text-[#B8A99A] text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#3D2E24] dark:text-[#FAF7F2]">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialItem key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-[#3D322C] rounded-2xl p-8 shadow-lg text-center">
            <TrendingUp className="w-12 h-12 text-[#8B7355] mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-[#3D2E24] dark:text-[#FAF7F2]">Start Your Health Journey Today</h2>
            <p className="text-[#7A6B5E] dark:text-[#B8A99A] mb-6 max-w-xl mx-auto">
              Join thousands of users who have transformed their health with HealthTracker. It is free, beautiful, and easy to use.
            </p>
            <Link href="/dashboard" className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B7355] hover:bg-[#6B5344] text-white rounded-xl font-medium transition-colors cursor-pointer">
              Get Started Free <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}