import { Calendar, Target, Trophy, TrendingUp, Book, Flame, ArrowRight, Star, Zap, Brain, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../../shared/ui/Card/Card';
import { Button } from '../../../../shared/ui/Button/Button';
import { Separator } from "../../../../shared/ui/Separator/Separator";
import { Progress } from "../../../../shared/ui/Progress/Progress";
import styles from "./DashboardPage.module.css";
import {useAppSelector} from "../../../../shared/hooks/useAppSelector.ts";
import {getFullProfile} from "../../../../entities/profile/selectors/profileSelectors.ts";

// Mock user data - in real app would come from backend
const userData = {
    wordsToday: 12,
    goalToday: 20,
    totalWords: 1247,
    currentStreak: 15,
    bestStreak: 23,
    currentLevel: 'Intermediate',
    levelProgress: 67, // 0-100
    weeklyStats: [8, 12, 6, 15, 9, 12, 8], // last 7 days
    todayProgress: 60, // percent of daily goal
    accuracy: 92,
    timeThisWeek: 158, // minutes
    testsCompleted: 47,
    achievements: [
        { name: 'First Streak', icon: Flame, completed: true },
        { name: 'Word Master', icon: Book, completed: true },
        { name: 'Perfect Week', icon: Star, completed: false },
    ]
};

const DashboardPage = () => {

    const profile = useAppSelector(getFullProfile); // TODO: declare getFullProfile in @/entities/profile
    // TODO: configure Redux & RTK Query to fetch real user data
    // Then , you may start developing the backend API to test with real data



    const completedAchievements = userData.achievements.filter(a => a.completed).length;
    return (
        <div className={styles.root}>
            {/* Hero Section */}
            <div className={styles.hero}>
                <div className={styles.badge}>
                    <Flame className={styles.iconSmall} />
                    <span className={styles.badgeText}>{userData.currentStreak} Day Streak</span>
                </div>
                <h1 className={styles.h1}>Welcome back!</h1>
                <p className={styles.subtitle}>
                    Continue your English learning journey. You're making excellent progress.
                </p>
            </div>

            {/* Today's Focus */}
            <Card className={styles.cardBorder}>
                <CardHeader>
                    <div className={styles.headerRow}>
                        <div>
                            <CardTitle className={styles.cardTitleLarge}>Today's Progress</CardTitle>
                            <p className={styles.muted}>Keep up the momentum</p>
                        </div>
                        <div className={styles.textRight}>
                            <div className={styles.bigNumber}>{userData.wordsToday}/{userData.goalToday}</div>
                            <p className={styles.smallMuted}>words learned</p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className={styles.contentSpacing}>
                    <Progress value={userData.todayProgress} style={{marginBottom: '20px'}} />
                    <div className={styles.rowBetween}>
                        <span className={styles.mutedSmall}>{userData.todayProgress}% of daily goal</span>
                        <Button size="sm">
                            Continue Learning
                            <ArrowRight className={styles.iconMargin} />
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Stats Grid */}
            <div className={styles.statsGrid}>
                {/* Total Words */}
                <Card>
                    <CardHeader className={styles.pb3}>
                        <CardTitle className={styles.smallMutedTitle}>Total Vocabulary</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className={styles.rowItems}>
                            <Book className={styles.icon} />
                            <div className={styles.bigNumber}>{userData.totalWords.toLocaleString()}</div>
                        </div>
                        <p className={styles.smallMuted}>words mastered</p>
                    </CardContent>
                </Card>

                {/* Current Level */}
                <Card>
                    <CardHeader className={styles.pb3}>
                        <CardTitle className={styles.smallMutedTitle}>Current Level</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className={styles.rowItems}>
                            <TrendingUp className={styles.icon} />
                            <div className={styles.levelText}>{userData.currentLevel}</div>
                        </div>
                        <div className={styles.mt2}>
                            <div className={styles.rowBetweenSmall}>
                                <span>{userData.levelProgress}%</span>
                                <span>to Advanced</span>
                            </div>
                            <Progress value={userData.levelProgress} style={{ marginTop: '0.25rem', height: '0.375rem' }} />
                        </div>
                    </CardContent>
                </Card>

                {/* Best Streak */}
                <Card>
                    <CardHeader className={styles.pb3}>
                        <CardTitle className={styles.smallMutedTitle}>Best Streak</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className={styles.rowItems}>
                            <Trophy className={styles.icon} />
                            <div className={styles.bigNumber}>{userData.bestStreak}</div>
                        </div>
                        <p className={styles.smallMuted}>days in a row</p>
                    </CardContent>
                </Card>

                {/* Accuracy */}
                <Card>
                    <CardHeader className={styles.pb3}>
                        <CardTitle className={styles.smallMutedTitle}>Accuracy Rate</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className={styles.rowItems}>
                            <Target className={styles.icon} />
                            <div className={styles.bigNumber}>{userData.accuracy}%</div>
                        </div>
                        <p className={styles.smallMuted}>overall precision</p>
                    </CardContent>
                </Card>
            </div>

            {/* Weekly Activity & Achievements */}
            <div className={styles.weeklyGrid}>
                {/* Weekly Activity */}
                <Card className={styles.lgColSpan2}>
                    <CardHeader>
                        <CardTitle className={styles.rowItemsTitle}>
                            <Calendar className={styles.icon} />
                            Weekly Activity
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className={styles.spaceY4}>
                            <div className={styles.weeklyBars}>
                                {userData.weeklyStats.map((words, index) => {
                                    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                                    const height = (words / Math.max(...userData.weeklyStats)) * 100;
                                    const isToday = index === 6; // Assuming Sunday is today

                                    return (
                                        <div key={index} className={styles.weekColumn}>
                                            <div
                                                className={`${styles.bar} ${isToday ? styles.barPrimary : styles.barMuted}`}
                                                style={{ height: `${height}%`, minHeight: '8px' }}
                                            />
                                            <span className={styles.dayText}>{days[index]}</span>
                                            <span className={styles.wordCount}>{words}</span>
                                        </div>
                                    );
                                })}
                            </div>
                            <Separator />
                            <div className={styles.gridStats}>
                                <div>
                                    <div className={styles.statBig}>{Math.floor(userData.timeThisWeek / 60)}h {userData.timeThisWeek % 60}m</div>
                                    <p className={styles.statSmall}>This Week</p>
                                </div>
                                <div>
                                    <div className={styles.statBig}>{userData.testsCompleted}</div>
                                    <p className={styles.statSmall}>Tests Passed</p>
                                </div>
                                <div>
                                    <div className={styles.statBig}>{userData.weeklyStats.reduce((a, b) => a + b, 0)}</div>
                                    <p className={styles.statSmall}>Words This Week</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Achievements */}
                <Card>
                    <CardHeader>
                        <CardTitle className={styles.rowItemsTitle}>
                            <Award className={styles.icon} />
                            Achievements
                        </CardTitle>
                    </CardHeader>
                    <CardContent className={styles.contentSpacing}>
                        <div className={styles.centerText}>
                            <div className={styles.statBig}>{completedAchievements}/{userData.achievements.length}</div>
                            <p className={styles.statSmall}>earned</p>
                        </div>
                        <Separator />
                        <div className={styles.spaceY3}>
                            {userData.achievements.map((achievement, index) => {
                                const Icon = achievement.icon;
                                return (
                                    <div key={index} className={`${styles.achievementRow} ${achievement.completed ? styles.achievementCompleted : styles.opacity50}`}>
                                        <Icon className={`${styles.iconSmall} ${achievement.completed ? styles.iconActive : styles.iconMuted}`} />
                                        <span className={styles.achievementText}>{achievement.name}</span>
                                        {achievement.completed && <div className={styles.achievementDot} />}
                                    </div>
                                );
                            })}
                        </div>
                        <Button variant="outline" size="sm" className={styles.fullWidth}>
                            View All
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Quick Actions */}
            <div className={styles.quickGrid}>
                <Card className={styles.cardGroup}>
                    <CardContent className={styles.cardContentCenter}>
                        <Brain className={styles.iconLarge} />
                        <h3 className={styles.cardTitle}>Take a Test</h3>
                        <p className={styles.smallMuted}>Challenge yourself with our adaptive tests</p>
                    </CardContent>
                </Card>

                <Card className={styles.cardGroup}>
                    <CardContent className={styles.cardContentCenter}>
                        <Book className={styles.iconLarge} />
                        <h3 className={styles.cardTitle}>Add New Words</h3>
                        <p className={styles.smallMuted}>Expand your vocabulary collection</p>
                    </CardContent>
                </Card>

                <Card className={styles.cardGroup}>
                    <CardContent className={styles.cardContentCenter}>
                        <Zap className={styles.iconLarge} />
                        <h3 className={styles.cardTitle}>Quick Review</h3>
                        <p className={styles.smallMuted}>Review words you've recently learned</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default DashboardPage;