import React from 'react';
import { 
  ArrowRightLeft, 
  Download, 
  Send, 
  Home, 
  CreditCard, 
  PieChart, 
  User,
  Bell,
  ArrowUpRight,
  ArrowDownLeft
} from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans w-full max-w-full sm:max-w-md lg:max-w-lg mx-auto relative pb-20 shadow-xl overflow-hidden">
      
      {/* Header */}
      <header className="flex justify-between items-center p-6 pt-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
            JD
          </div>
          <div>
            <p className="text-sm text-foreground/60 font-medium">Good Morning,</p>
            <h1 className="text-lg font-bold">John Doe</h1>
          </div>
        </div>
        <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors duration-200">
          <Bell className="w-5 h-5" />
        </button>
      </header>

      {/* Main Balance Hero */}
      <section className="px-6 py-4">
        <div className="bg-foreground text-background rounded-3xl p-6 shadow-soft relative overflow-hidden">
          {/* Decorative shapes for Exaggerated Minimalism */}
          <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-primary/20 blur-2xl"></div>
          <div className="absolute -left-8 -bottom-8 w-24 h-24 rounded-full bg-accent/20 blur-xl"></div>
          
          <div className="relative z-10">
            <p className="text-sm font-medium opacity-80 mb-1">Available Balance</p>
            <h2 className="text-4xl font-bold tracking-tight mb-6">$24,592.00</h2>
            
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-5 bg-background/20 rounded flex items-center justify-center text-xs tracking-wider">
                  ****
                </div>
                <span className="opacity-90">3849</span>
              </div>
              <span className="font-semibold text-primary">Active</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="px-6 py-6 flex justify-between">
        {[
          { icon: ArrowRightLeft, label: 'Transfer', color: 'bg-primary/10 text-primary' },
          { icon: Download, label: 'Deposit', color: 'bg-accent/10 text-accent' },
          { icon: Send, label: 'Send', color: 'bg-foreground/10 text-foreground' },
        ].map((action, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2">
            <button className={`w-16 h-16 rounded-2xl flex items-center justify-center ${action.color} hover:scale-105 active:scale-95 transition-transform duration-200`}>
              <action.icon className="w-7 h-7" />
            </button>
            <span className="text-xs font-semibold">{action.label}</span>
          </div>
        ))}
      </section>

      {/* Recent Transactions */}
      <section className="px-6 py-4 flex-1">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold">Recent Activity</h3>
          <button className="text-sm font-semibold text-primary hover:opacity-80 transition-opacity">
            See All
          </button>
        </div>
        
        <div className="space-y-4">
          {[
            { title: 'Apple Store', category: 'Electronics', amount: '-$1,299.00', date: 'Today, 2:45 PM', type: 'out' },
            { title: 'Salary Deposit', category: 'Income', amount: '+$4,250.00', date: 'Yesterday', type: 'in' },
            { title: 'Starbucks', category: 'Coffee', amount: '-$5.40', date: 'Yesterday', type: 'out' },
            { title: 'Uber Ride', category: 'Transport', amount: '-$24.50', date: 'Oct 12', type: 'out' },
          ].map((tx, idx) => (
            <div key={idx} className="flex justify-between items-center p-4 rounded-2xl border border-border/50 hover:border-border hover:bg-muted/30 transition-all duration-200 cursor-pointer">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${tx.type === 'in' ? 'bg-green-100 text-green-600' : 'bg-muted text-foreground/70'}`}>
                  {tx.type === 'in' ? <ArrowDownLeft className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{tx.title}</h4>
                  <p className="text-xs text-foreground/50 mt-0.5">{tx.category}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-bold text-sm ${tx.type === 'in' ? 'text-green-600' : ''}`}>{tx.amount}</p>
                <p className="text-xs text-foreground/50 mt-0.5">{tx.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="absolute bottom-0 w-full max-w-full sm:max-w-md lg:max-w-lg bg-background border-t border-border px-6 py-4 flex justify-between items-center z-50">
        {[
          { icon: Home, label: 'Home', active: true },
          { icon: CreditCard, label: 'Cards' },
          { icon: PieChart, label: 'Analytics' },
          { icon: User, label: 'Profile' },
        ].map((item, idx) => (
          <button key={idx} className={`flex flex-col items-center gap-1.5 ${item.active ? 'text-primary' : 'text-foreground/40 hover:text-foreground/70'} transition-colors duration-200`}>
            <item.icon className={`w-6 h-6 ${item.active ? 'fill-primary/20' : ''}`} />
            <span className="text-[10px] font-bold tracking-wide">{item.label}</span>
          </button>
        ))}
      </nav>
      
    </div>
  );
};

export default Dashboard;
