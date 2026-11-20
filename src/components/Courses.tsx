import { BookOpen, Calendar, Monitor, Clock } from 'lucide-react';
import { courses } from '@/data/cv';

export default function Courses() {
  return (
    <section id="cursos" className="relative py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-subtitle flex items-center justify-center gap-2">
            <BookOpen className="w-4 h-4" /> Formación Continua
          </p>
          <h2 className="section-title">Cursos Académicos</h2>
        </div>

        <div className="space-y-4">
          {courses.map((course, i) => {
            const Icon = course.icon;
            return (
              <div
                key={i}
                className="glass-card glow-border p-5 md:p-6 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-nebula-500/40 transition-all duration-500 hover:translate-y-[-2px]"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-nebula-500/15 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-nebula-300" />
                </div>

                <div className="flex-1">
                  <h3 className="font-display font-semibold text-white">{course.title}</h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-nebula-200/50 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {course.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Monitor className="w-3 h-3" />
                      {course.mode}
                    </span>
                    {course.hours && (
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        {course.hours}h
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
