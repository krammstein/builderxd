import React, { useState, useEffect, useRef } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Clock } from 'lucide-react';

interface DateTimePickerProps {
  value: string;
  onChange: (value: string) => void;
  showTime?: boolean;
  minDate?: string;
  disabled?: boolean;
}

export const DateTimePicker: React.FC<DateTimePickerProps> = ({
  value = '',
  onChange,
  showTime = true,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parse current date
  const [currentDate, setCurrentDate] = useState<Date>(() => {
    const d = value ? new Date(value) : new Date();
    return isNaN(d.getTime()) ? new Date() : d;
  });

  // Calendar state: month and year views
  const [viewDate, setViewDate] = useState<Date>(() => {
    return new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  });

  const [hours, setHours] = useState(currentDate.getHours());
  const [minutes, setMinutes] = useState(currentDate.getMinutes());

  useEffect(() => {
    const d = value ? new Date(value) : new Date();
    if (!isNaN(d.getTime())) {
      setCurrentDate(d);
      setViewDate(new Date(d.getFullYear(), d.getMonth(), 1));
      setHours(d.getHours());
      setMinutes(d.getMinutes());
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const daysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const startDayOfWeek = (date: Date) => {
    // 0 = Sunday, 1 = Monday, etc. Adjusting to 0 = Monday for ES style
    const day = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return day === 0 ? 6 : day - 1;
  };

  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const handlePrevMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  };

  const handleSelectDay = (day: number) => {
    const newDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), day, hours, minutes);
    setCurrentDate(newDate);
    if (!showTime) {
      const year = newDate.getFullYear();
      const month = String(newDate.getMonth() + 1).padStart(2, '0');
      const dateStr = String(newDate.getDate()).padStart(2, '0');
      onChange(`${year}-${month}-${dateStr}`);
      setIsOpen(false);
    }
  };

  const handleConfirm = () => {
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const dateStr = String(currentDate.getDate()).padStart(2, '0');
    const hh = String(hours).padStart(2, '0');
    const mm = String(minutes).padStart(2, '0');

    if (showTime) {
      onChange(`${year}-${month}-${dateStr}T${hh}:${mm}:00`);
    } else {
      onChange(`${year}-${month}-${dateStr}`);
    }
    setIsOpen(false);
  };

  const handleClear = () => {
    onChange('');
    setIsOpen(false);
  };

  // Generate calendar days grid
  const days: (number | null)[] = [];
  const startDay = startDayOfWeek(viewDate);
  const totalDays = daysInMonth(viewDate);

  // Fill in blanks for previous month
  for (let i = 0; i < startDay; i++) {
    days.push(null);
  }

  // Fill in current month days
  for (let i = 1; i <= totalDays; i++) {
    days.push(i);
  }

  const formatDisplay = () => {
    if (!value) return 'Seleccionar fecha...';
    const d = new Date(value);
    if (isNaN(d.getTime())) return value;
    const datePart = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    const timePart = showTime ? ` ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}` : '';
    return datePart + timePart;
  };

  return (
    <div className="relative w-full" ref={containerRef}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-2 bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs cursor-pointer text-left outline-none hover:border-border-color/85 disabled:opacity-50"
        id={`dtp-btn-${value.replace(/[^a-zA-Z0-9]/g, '')}`}
      >
        <Calendar size={14} className="text-text-muted shrink-0" />
        <span className="flex-1">{formatDisplay()}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-11 bg-bg-panel border border-border-color rounded-lg shadow-xl p-3 z-50 flex flex-col gap-3 w-64 animate-in fade-in slide-in-from-top-2 duration-150">
          {/* Header navigation */}
          <div className="flex items-center justify-between border-b border-border-color/30 pb-2">
            <button
              type="button"
              onClick={handlePrevMonth}
              className="p-1 hover:bg-bg-hover rounded-full transition-all cursor-pointer border-none text-text-primary"
              id="dtp-prev-month"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="text-xs font-semibold text-text-primary">
              {months[viewDate.getMonth()]} {viewDate.getFullYear()}
            </span>
            <button
              type="button"
              onClick={handleNextMonth}
              className="p-1 hover:bg-bg-hover rounded-full transition-all cursor-pointer border-none text-text-primary"
              id="dtp-next-month"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Days labels */}
          <div className="grid grid-cols-7 gap-1 text-center">
            {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map((d, i) => (
              <span key={i} className="text-[10px] text-text-muted font-bold">{d}</span>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-1">
            {days.map((day, idx) => {
              if (day === null) {
                return <div key={`empty-${idx}`} />;
              }

              const isSelected =
                currentDate.getDate() === day &&
                currentDate.getMonth() === viewDate.getMonth() &&
                currentDate.getFullYear() === viewDate.getFullYear();

              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => handleSelectDay(day)}
                  className={`h-7 w-7 rounded-md text-xs flex items-center justify-center transition-all cursor-pointer border-none outline-none ${
                    isSelected
                      ? 'bg-primary text-white font-bold'
                      : 'text-text-primary hover:bg-bg-hover'
                  }`}
                  id={`dtp-day-${day}`}
                >
                  {day}
                </button>
              );
            })}
          </div>

          {/* Time Picker */}
          {showTime && (
            <div className="flex items-center justify-between border-t border-border-color/30 pt-2.5">
              <div className="flex items-center gap-1.5 text-text-muted text-[11px] font-medium">
                <Clock size={12} />
                <span>Hora:</span>
              </div>
              <div className="flex items-center gap-1 text-xs">
                <input
                  type="number"
                  min="0"
                  max="23"
                  value={hours}
                  onChange={(e) => {
                    const h = Math.max(0, Math.min(23, parseInt(e.target.value) || 0));
                    setHours(h);
                    const newD = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), h, minutes);
                    setCurrentDate(newD);
                  }}
                  className="w-10 text-center bg-bg-hover border border-border-color rounded-sm p-1 text-text-primary outline-none"
                  id="dtp-hour"
                />
                <span className="font-bold text-text-muted">:</span>
                <input
                  type="number"
                  min="0"
                  max="59"
                  value={minutes}
                  onChange={(e) => {
                    const m = Math.max(0, Math.min(59, parseInt(e.target.value) || 0));
                    setMinutes(m);
                    const newD = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), hours, m);
                    setCurrentDate(newD);
                  }}
                  className="w-10 text-center bg-bg-hover border border-border-color rounded-sm p-1 text-text-primary outline-none"
                  id="dtp-minute"
                />
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex gap-2 border-t border-border-color/30 pt-2.5">
            <button
              type="button"
              onClick={handleClear}
              className="flex-1 bg-transparent hover:bg-bg-hover text-text-secondary border border-border-color text-[11px] font-medium p-1.5 rounded-md cursor-pointer transition-all"
              id="dtp-clear"
            >
              Limpiar
            </button>
            <button
              type="button"
              onClick={handleConfirm}
              className="flex-1 bg-primary hover:bg-primary/90 text-white text-[11px] font-medium p-1.5 rounded-md cursor-pointer transition-all border-none"
              id="dtp-confirm"
            >
              Confirmar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
