// src/App.jsx - 完全版
import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Clock, Plus, MessageCircle, Trash2 } from 'lucide-react';

const DrinkingPartyApp = () => {
  const [events, setEvents] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    maxParticipants: '',
    description: '',
    organizer: ''
  });

  // サンプルデータ
  useEffect(() => {
    const sampleEvents = [
      {
        id: 1,
        title: '亀津港で夕焼け飲み会',
        date: '2025-07-05',
        time: '18:00',
        location: '亀津港',
        maxParticipants: 8,
        participants: ['田中さん', '山田さん', '佐藤さん'],
        description: '夕焼けを見ながらのんびり飲みましょう！',
        organizer: '田中さん',
        comments: [
          { id: 1, author: '山田さん', text: '楽しみにしてます！', time: '2025-06-25 14:30' }
        ]
      },
      {
        id: 2,
        title: '平土野de島料理パーティー',
        date: '2025-07-12',
        time: '19:30',
        location: '平土野公民館',
        maxParticipants: 15,
        participants: ['鈴木さん', '高橋さん'],
        description: '島の食材を使った料理を持ち寄りで！',
        organizer: '鈴木さん',
        comments: []
      }
    ];
    setEvents(sampleEvents);
  }, []);

  const handleCreateEvent = () => {
    if (!newEvent.title || !newEvent.date || !newEvent.time || !newEvent.location || !newEvent.maxParticipants || !newEvent.organizer) {
      alert('必須項目を入力してください');
      return;
    }
    const event = {
      id: Date.now(),
      ...newEvent,
      participants: [newEvent.organizer],
      comments: []
    };
    setEvents([...events, event]);
    setNewEvent({
      title: '',
      date: '',
      time: '',
      location: '',
      maxParticipants: '',
      description: '',
      organizer: ''
    });
    setShowCreateForm(false);
  };

  const joinEvent = (eventId, userName) => {
    if (!userName.trim()) return;
    setEvents(events.map(event => 
      event.id === eventId 
        ? { ...event, participants: [...event.participants, userName] }
        : event
    ));
  };

  const addComment = (eventId, comment, author) => {
    if (!comment.trim() || !author.trim()) return;
    const newComment = {
      id: Date.now(),
      author,
      text: comment,
      time: new Date().toLocaleString('ja-JP')
    };
    setEvents(events.map(event => 
      event.id === eventId 
        ? { ...event, comments: [...event.comments, newComment] }
        : event
    ));
  };

  const deleteEvent = (eventId) => {
    if (window.confirm('本当に削除しますか？')) {
      setEvents(events.filter(event => event.id !== eventId));
    }
  };

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '16px',
      background: 'linear-gradient(135deg, #f0f9ff 0%, #ecfdf5 100%)',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    header: {
      background: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '24px',
      marginBottom: '24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '16px'
    },
    title: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#1f2937',
      margin: '0 0 8px 0'
    },
    subtitle: {
      color: '#6b7280',
      margin: 0
    },
    createButton: {
      background: '#f97316',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      padding: '12px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '500',
      transition: 'background-color 0.2s'
    },
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 50,
      padding: '16px'
    },
    modal: {
      background: 'white',
      borderRadius: '8px',
      padding: '24px',
      maxWidth: '500px',
      width: '100%',
      maxHeight: '90vh',
      overflow: 'auto'
    },
    modalTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      marginBottom: '16px'
    },
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      marginBottom: '24px'
    },
    input: {
      width: '100%',
      padding: '8px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '4px',
      fontSize: '16px',
      boxSizing: 'border-box'
    },
    textarea: {
      width: '100%',
      padding: '8px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '4px',
      fontSize: '16px',
      minHeight: '80px',
      resize: 'vertical',
      boxSizing: 'border-box'
    },
    buttonContainer: {
      display: 'flex',
      gap: '8px'
    },
    primaryButton: {
      flex: 1,
      background: '#f97316',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      padding: '8px 16px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.2s'
    },
    secondaryButton: {
      flex: 1,
      background: '#d1d5db',
      color: '#374151',
      border: 'none',
      borderRadius: '4px',
      padding: '8px 16px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.2s'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '24px'
    },
    card: {
      background: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      padding: '24px'
    },
    cardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '16px'
    },
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#1f2937',
      margin: 0
    },
    deleteButton: {
      background: 'none',
      border: 'none',
      color: '#ef4444',
      cursor: 'pointer',
      padding: '4px'
    },
    eventDetails: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      marginBottom: '16px'
    },
    detailItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#6b7280'
    },
    description: {
      color: '#374151',
      marginBottom: '16px',
      lineHeight: 1.5
    },
    participantsSection: {
      marginBottom: '16px'
    },
    sectionTitle: {
      fontSize: '0.875rem',
      fontWeight: '600',
      marginBottom: '8px',
      color: '#374151'
    },
    participantsList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '4px'
    },
    participantTag: {
      background: '#dbeafe',
      color: '#1e40af',
      padding: '4px 8px',
      borderRadius: '16px',
      fontSize: '0.75rem'
    },
    joinButton: {
      width: '100%',
      background: '#10b981',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      padding: '8px 16px',
      cursor: 'pointer',
      fontSize: '16px',
      marginBottom: '16px',
      transition: 'background-color 0.2s'
    },
    disabledButton: {
      background: '#9ca3af',
      cursor: 'not-allowed'
    },
    commentsSection: {
      borderTop: '1px solid #e5e7eb',
      paddingTop: '16px'
    },
    commentsTitle: {
      fontSize: '0.875rem',
      fontWeight: '600',
      marginBottom: '8px',
      color: '#374151',
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    },
    commentsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      marginBottom: '12px',
      maxHeight: '120px',
      overflow: 'auto'
    },
    comment: {
      background: '#f9fafb',
      padding: '8px',
      borderRadius: '4px',
      fontSize: '0.875rem'
    },
    commentAuthor: {
      fontWeight: '600',
      marginBottom: '4px'
    },
    commentTime: {
      fontSize: '0.75rem',
      color: '#6b7280',
      marginTop: '4px'
    },
    addCommentButton: {
      background: 'none',
      border: 'none',
      color: '#3b82f6',
      cursor: 'pointer',
      fontSize: '0.875rem',
      padding: 0
    },
    emptyState: {
      textAlign: 'center',
      padding: '48px 0'
    },
    emptyStateText: {
      color: '#6b7280',
      fontSize: '1.125rem',
      marginBottom: '16px'
    },
    emptyStateSubtext: {
      color: '#9ca3af'
    }
  };

  return (
    <div style={styles.container}>
      {/* ヘッダー */}
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>🏝️ 徳之島飲み会予定</h1>
          <p style={styles.subtitle}>島民みんなで楽しい時間を共有しよう！</p>
        </div>
        <button
          onClick={() => setShowCreateForm(true)}
          style={styles.createButton}
        >
          <Plus size={20} />
          イベント作成
        </button>
      </div>

      {/* イベント作成フォーム */}
      {showCreateForm && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2 style={styles.modalTitle}>新しい飲み会を企画</h2>
            <div style={styles.formContainer}>
              <input
                type="text"
                placeholder="イベント名"
                value={newEvent.title}
                onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                style={styles.input}
              />
              <input
                type="date"
                value={newEvent.date}
                onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                style={styles.input}
              />
              <input
                type="time"
                value={newEvent.time}
                onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                style={styles.input}
              />
              <input
                type="text"
                placeholder="場所"
                value={newEvent.location}
                onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                style={styles.input}
              />
              <input
                type="number"
                placeholder="最大参加人数"
                value={newEvent.maxParticipants}
                onChange={(e) => setNewEvent({...newEvent, maxParticipants: e.target.value})}
                style={styles.input}
              />
              <input
                type="text"
                placeholder="主催者名"
                value={newEvent.organizer}
                onChange={(e) => setNewEvent({...newEvent, organizer: e.target.value})}
                style={styles.input}
              />
              <textarea
                placeholder="詳細・持ち物など"
                value={newEvent.description}
                onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                style={styles.textarea}
              />
            </div>
            <div style={styles.buttonContainer}>
              <button
                onClick={handleCreateEvent}
                style={styles.primaryButton}
              >
                作成
              </button>
              <button
                onClick={() => setShowCreateForm(false)}
                style={styles.secondaryButton}
              >
                キャンセル
              </button>
            </div>
          </div>
        </div>
      )}

      {/* イベント一覧 */}
      <div style={styles.grid}>
        {events.map(event => (
          <div key={event.id} style={styles.card}>
            <div style={styles.cardHeader}>
              <h3 style={styles.cardTitle}>{event.title}</h3>
              <button
                onClick={() => deleteEvent(event.id)}
                style={styles.deleteButton}
              >
                <Trash2 size={16} />
              </button>
            </div>
            
            <div style={styles.eventDetails}>
              <div style={styles.detailItem}>
                <Calendar size={16} />
                <span>{event.date}</span>
              </div>
              <div style={styles.detailItem}>
                <Clock size={16} />
                <span>{event.time}</span>
              </div>
              <div style={styles.detailItem}>
                <MapPin size={16} />
                <span>{event.location}</span>
              </div>
              <div style={styles.detailItem}>
                <Users size={16} />
                <span>{event.participants.length}/{event.maxParticipants}人</span>
              </div>
            </div>

            <p style={styles.description}>{event.description}</p>
            
            <div style={styles.participantsSection}>
              <h4 style={styles.sectionTitle}>参加者</h4>
              <div style={styles.participantsList}>
                {event.participants.map((participant, index) => (
                  <span key={index} style={styles.participantTag}>
                    {participant}
                  </span>
                ))}
              </div>
            </div>

            {/* 参加ボタン */}
            <button
              onClick={() => {
                const name = prompt('お名前を入力してください：');
                if (name) joinEvent(event.id, name);
              }}
              style={{
                ...styles.joinButton,
                ...(event.participants.length >= event.maxParticipants ? styles.disabledButton : {})
              }}
              disabled={event.participants.length >= event.maxParticipants}
            >
              {event.participants.length >= event.maxParticipants ? '満員です' : '参加する'}
            </button>

            {/* コメント */}
            <div style={styles.commentsSection}>
              <h4 style={styles.commentsTitle}>
                <MessageCircle size={14} />
                コメント ({event.comments.length})
              </h4>
              <div style={styles.commentsList}>
                {event.comments.map(comment => (
                  <div key={comment.id} style={styles.comment}>
                    <div style={styles.commentAuthor}>{comment.author}</div>
                    <div>{comment.text}</div>
                    <div style={styles.commentTime}>{comment.time}</div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => {
                  const author = prompt('お名前を入力してください：');
                  if (author) {
                    const comment = prompt('コメントを入力してください：');
                    if (comment) addComment(event.id, comment, author);
                  }
                }}
                style={styles.addCommentButton}
              >
                コメントを追加
              </button>
            </div>
          </div>
        ))}
      </div>

      {events.length === 0 && (
        <div style={styles.emptyState}>
          <p style={styles.emptyStateText}>まだイベントがありません</p>
          <p style={styles.emptyStateSubtext}>最初の飲み会を企画してみましょう！</p>
        </div>
      )}
    </div>
  );
};

export default DrinkingPartyApp;